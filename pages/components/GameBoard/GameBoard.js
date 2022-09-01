import React, { useState, useRef } from "react";
import styles from "./GameBoard.module.scss";
import GameRow from "../GameRow/GameRow";
import GameCell from "../GameCell/GameCell";
import useWindowDimensions from "../Util/useWindowDimensions";

function GameBoard(props) {
  const boardRef = useRef(null);
  const { boardSize, getClickState, setClickState, solution } = props;
  const [getBeforeTile, setBeforeTile] = useState(undefined);
  const width = useWindowDimensions()[0];
  // 1 = left click
  // 2 = right click
  const [getTapFillMode, setTapFillMode] = useState(true);

  var initialArray = [];
  for (let j = 0; j < boardSize; j++) {
    var rowArray = [];
    for (let i = 0; i < boardSize; i++) {
      rowArray.push(0);
    }

    initialArray.push([...rowArray]);
  }
  const [getArray, setArray] = useState([...initialArray]);

  function handleMouseDown(e) {
    if (e.button == 2) {
      setClickState(2);
    } else {
      setClickState(1);
    }
  }

  function handleMouseUp(e) {
    setClickState(0);
  }


  function handleMouseMove(e) {
    if(getClickState){
      let tileSize = 27;
      if(width >= 768) {
        tileSize = 52;
      }
      console.log
      let fillMode = getTapFillMode ? 1 : 2;
      if (getClickState == 2) {
        fillMode == 1 ? fillMode = 2 : fillMode = 1;
      }
      let boardX = boardRef.current?.getBoundingClientRect().x;
      //  console.log('BoardX: ' + boardX);
      let boardY = boardRef.current?.getBoundingClientRect().y;
      //  console.log('BoardY: ' + boardY);


      let mouseX, mouseY = 0;
      if(e.touches){
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }

      if(getBeforeTile == 0) {
        updateArray(Math.floor((mouseY - boardY) / tileSize), Math.floor((mouseX - boardX) / tileSize), fillMode);
      } else {
        updateArray(Math.floor((mouseY - boardY) / tileSize), Math.floor((mouseX - boardX) / tileSize), 0);
      }
    }
  }

  function updateArray(row, column, newValue) {
    let temp_array = getArray;
    if(row < boardSize && column < boardSize && row > -1 && column > -1){
      temp_array[row][column] = newValue;
      setArray([...temp_array]);
    }
  }

  function resetAll() {
    for (let j = 0; j < boardSize; j++) {
      for (let i = 0; i < boardSize; i++) {
        updateArray(j, i, 0);
      }
    }
    setBeforeTile(undefined);
  }

  function checkSolution() {
    if (getArray.toString().replaceAll(",", "").replaceAll("2", "0") == solution) {
      alert("Yay!");
    } else {
      alert("Nope!");
    }
  }

  return (
    <>
      <div ref={boardRef} className={styles.gameBoard} onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp} onTouchMove={handleMouseMove} onMouseMove={handleMouseMove}>
        {(() => {
          let iRowArray = [];
          for (let j = 0; j < boardSize; j++) {
            iRowArray.push(
              <GameRow className={styles.gameRow} key={j}>
                {(() => {
                  let iCellArray = [];
                  for (let i = 0; i < boardSize; i++) {
                    iCellArray.push(<GameCell key={j + "-" + i} clickState={getClickState} row={j} column={i} getArray={getArray} updateArray={updateArray} getBeforeTile={getBeforeTile} setBeforeTile={setBeforeTile} getTapFillMode={getTapFillMode}></GameCell>);
                  }
                  return iCellArray;
                })()}
              </GameRow>
            );
          }
          return iRowArray;
        })()}
      </div>
      <div className={styles.buttons}>
        <button onClick={resetAll}>Reset</button>
        <button onClick={checkSolution}>Check</button>
      </div>
      <label className={styles.switch}>
        <input type="checkbox" defaultChecked onChange={() => {setTapFillMode(!getTapFillMode)}} />
        <span className={styles.slider}></span>
      </label>
    </>
  );
}

export default GameBoard;
