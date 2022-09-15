import React, { useState, useEffect, useRef } from "react";
import styles from "./GameBoard.module.scss";
import GameRow from "../GameRow/GameRow";
import GameCell from "../GameCell/GameCell";
import useWindowDimensions from "../Util/useWindowDimensions";
import { render } from "react-dom";

function GameBoard(props) {
  const boardRef = useRef(null);
  const { getPuzzleNum, getNewPuzzle, getClickState, setClickState, rowHints, columnHints, setPuzzleSolved, isPuzzleSolved } = props;
  const [getBeforeTile, setBeforeTile] = useState(undefined); // remember the class of the tile the user first clicked/tapped. If the user drags, only tiles with the same initial class will be updated.
  const [getInitialTile, setInitialTile] = useState(undefined); // remember the coordinates of the tile the user first clicked/tapped. If the user drags, only tiles in the same row/column will be updated.

  const width = useWindowDimensions()[0]; // get window width
  const [getTapFillMode, setTapFillMode] = useState(true); // true = fill mode is set to fill, false = fill mode is set to "X" (controlled by a toggle at the bottom)
  
  const [getArray, setArray] = useState([]); // array of game cells, filled by renderArray function
  const [isHistoryEnabled, setHistoryEnabled] = useState(false); // set true when the game board is generated
  const [getHistory, setHistory] = useState([]); // remember the history of the game, allowing for undos
  
  // create array of cells based on the board size
  function renderArray() {
    let temp_array = [];
    if (rowHints && columnHints) {
      setHistoryEnabled(true);
      for (let j = 0; j < rowHints.length; j++) {
        let rowArray = []; // each entry in the array is another array representing a row
        for (let i = 0; i < columnHints.length; i++) {
          rowArray.push(0); //each row array is filled with 0s to represent empty cells
        }
        temp_array.push([...rowArray]);
      }
    }
    setArray(temp_array.map(e => [...e]));
    updateHistory();
  }

  // if the puzzle number changes, rerender the array
  useEffect(() => {
    renderArray();
  }, [getPuzzleNum]);

  // function to update the array
  // newValue: 0 is blank, 1 is filled, 2 is crossed out
  function updateArray(row, column, newValue) {
    let temp_array = getArray.map(e => [...e]);
    // sanity check to make sure the row and column are within the board size
    if (rowHints && columnHints && row < rowHints.length && column < columnHints.length && row > -1 && column > -1) {
      temp_array[row][column] = newValue;
      setArray(temp_array.map(e => [...e]));
    }
  }

  // reset the whole array to blanks (0)
  function resetAll() {
    setPuzzleSolved(false);
    renderArray();
  }

  // Pass in click event, return an array with the x and y cell coordinates of the clicked cell
  function getClickedTile(e) {
    let tileSize = 27; // SP tile size
    if (width >= 768) {
      tileSize = 52; // PC tile size
    }

    let boardX = boardRef.current?.getBoundingClientRect().x; // get the X coordinate of the game board
    //  console.log('BoardX: ' + boardX);
    let boardY = boardRef.current?.getBoundingClientRect().y; // get the Y coordinate of the game board
    //  console.log('BoardY: ' + boardY);

    let mouseX,
      mouseY = 0;

    // get the X and Y coordinates (pixels) of the click/tap
    if (e.touches) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    } else {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    // get the x and y cell coordinates based on where the click is on the board
    let yTile = Math.floor((mouseY - boardY) / tileSize);
    let xTile = Math.floor((mouseX - boardX) / tileSize);

    return [xTile, yTile];
  }

  // when the user clicks/taps on the board, update the clickState to 1 unless they right clicked on PC, then update it to 2
  function handleMouseDown(e) {
    updateHistory();
    setInitialTile([...getClickedTile(e)]); // remember the initially clicked tile
    
    if (e.button == 2) {
      setClickState(2);
    } else {
      setClickState(1);
    }
  }

  // reset the clickState to 0 when the user stops clicking/tapping
  function handleMouseUp(e) {
    setClickState(0);
    setInitialTile(undefined);
  }

  // if the user is clicking/tapping when they move the mouse, update the cells they are dragging over
  function handleMouseMove(e) {
    if (getClickState && getInitialTile) {
      // if clickState is not 0, they're clicking/tapping
      let clickedTile = getClickedTile(e); // get clicked cell

      let fillMode = getTapFillMode ? 1 : 2; // fillMode; 1 if the slider is set to fill, otherwise 2 (Xs)
      if (getClickState == 2) {
        // if the user is right clicking on PC, do the opposite
        fillMode == 1 ? (fillMode = 2) : (fillMode = 1);
      }

      // only update if the cell is in the same column or row as the intially clicked cell (no diagonal fills)
      if(getInitialTile[0] == clickedTile[0] || getInitialTile[1] == clickedTile[1]){
      if (getBeforeTile == 0) {
        // if the user initially targeted a blank cell, fill or cross out the cell they're tapping based on the fillMode
        updateArray(clickedTile[1], clickedTile[0], fillMode);
      } else {
        // otherwise, they're resetting the cell to blank, so do that for this cell too
        updateArray(clickedTile[1], clickedTile[0], 0);
      }
      }
    }
  }

  // check if the current board is a valid solution based on the hints
  function checkSolution() {
    setPuzzleSolved(false);
    if (!rowHints || !columnHints) {
      return;
    }

    // check each row comparing it to the hint provided
    for (let i = 0; i < rowHints.length; i++) {
      let row = getArray[i];
      let count = 0; // keep track the current number of adjacent filled cells
      let testString = ""; // will create a string to compare to the hint for each row; has format "#,#,#"
      for (let j = 0; j < row.length; j++) {
        // for each cell in the row
        if (row[j] == 1) {
          // if it's 1, increase count
          count++;
          if (j + 1 == row.length) {
            // if it's the last cell in the row, then add count to testString
            testString = testString.concat(count, ",");
          }
        } else {
          // if it's 0 or 2 and count is not 0, add count to testString, then reset count
          if (count != 0) {
            testString = testString.concat(count, ",");
            count = 0;
          }
        }
      }
      testString = testString.substring(0, testString.length - 1); // delete final comma

      if (rowHints[i] != testString) {
        // compare the string to the hint; if it's the same, then the row is okay
        alert(rowHints[i] + " and " + testString); //TODO: update the row class to show which row is incorrect
        return; // stop checking
      }
    }

    // check each column comparing it to the hint provided
    for (let i = 0; i < columnHints.length; i++) {
      let column = [];
      for (let j = 0; j < rowHints.length; j++) {
        column.push(getArray[j][i]); // add the corresponding cell from each row to the column array
      }
      let count = 0; // keep track the current number of adjacent filled cells
      let testString = ""; // will create a string to compare to the hint for each row; has format "#,#,#"
      for (let j = 0; j < column.length; j++) {
        // for each cell in the column
        if (column[j] == 1) {
          // if it's 1, increase count
          count++;
          if (j + 1 == column.length) {
            // if it's the last cell in the column, then add count to testString
            testString = testString.concat(count, ",");
          }
        } else {
          // if it's 0 or 2 and count is not 0, add count to testString, then reset count
          if (count != 0) {
            testString = testString.concat(count, ",");
            count = 0;
          }
        }
      }
      testString = testString.substring(0, testString.length - 1); // delete final comma

      if (columnHints[i] != testString) {
        // compare the string to the hint; if it's the same, then the column is okay
        alert(columnHints[i] + " and " + testString); //TODO: update the row class to show which row is incorrect
        return; // stop checking
      }
    }
    alert("Puzzle solved!");
    setPuzzleSolved(true);
  }

  //push the state of the board to the history array
  function updateHistory() {
    if(isHistoryEnabled){
      let history = getHistory.map(e => [...e]); //clone history array
      history.push(getArray.map(e => [...e])); // push current state of the board to the clone
      setHistory(history.map(e => [...e])); //set the history to this new clone
    }
  }

  //set board to the latest element in the history array, then remove that from the history array
  function undo() {
    if(getHistory.length > 1){ // first element is an empty array, so make sure there are at least 2 elements
      let newArray = getHistory.slice(-1)[0];
      setArray(newArray.map(e => [...e]));
      getHistory.pop();
    }
  }

  return (
    <>
      <div ref={boardRef} className={styles.gameBoard} onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp} onTouchMove={handleMouseMove} onMouseMove={handleMouseMove}>
        {/* push GameRow and GameCell components based on the number of rows/columns */}
        {(() => {
          let iRowArray = [];
          if(rowHints && columnHints) {
            for (let j = 0; j < rowHints.length; j++) {
              iRowArray.push(
                <GameRow className={styles.gameRow} key={j}>
                  {(() => {
                    let iCellArray = [];
                    for (let i = 0; i < columnHints.length; i++) {
                      iCellArray.push(<GameCell key={j + "-" + i} clickState={getClickState} row={j} column={i} getArray={getArray} updateArray={updateArray} getBeforeTile={getBeforeTile} setBeforeTile={setBeforeTile} getTapFillMode={getTapFillMode}></GameCell>);
                    }
                    return iCellArray;
                  })()}
                </GameRow>
              );
            }
          }
          return iRowArray;
        })()}
      </div>
      <h2 className={`${styles.puzzleNum} ${isPuzzleSolved ? styles.solved : ''}`}>#{getPuzzleNum}</h2>
      <div className={styles.buttons}>
        {/* toggle to change the fill mode from filling cells to crossing them out */}
        <button onClick={undo} className={styles.undo}>Undo</button>
        <label className={styles.switch}>
          <input
            type="checkbox"
            defaultChecked
            onChange={() => {
              setTapFillMode(!getTapFillMode);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => {getNewPuzzle()}}>New Puzzle</button>
        <button onClick={resetAll}>Reset</button>
        <button onClick={checkSolution}>Check</button>
      </div>
    </>
  );
}

export default GameBoard;
