import React, { useState } from "react";
import styles from "./GameBoard.module.scss";
import GameRow from "../GameRow/GameRow";
import GameCell from "../GameCell/GameCell";
// import HintRow from "../HintRow/HintRow";
import HintCol from "../HintCol/HintCol";

function GameBoard(props) {
  const { boardSize, getClickState, setClickState, solution } = props;
  const [getBeforeTile, setBeforeTile] = useState(undefined);
  // 1 = left click
  // 2 = right click

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

  function updateArray(row, column, newValue) {
    let temp_array = getArray;
    temp_array[row][column] = newValue;
    setArray([...temp_array]);
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
      <div className={styles.gameBoard} onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
        {(() => {
          let iRowArray = [];
          for (let j = 0; j < boardSize; j++) {
            iRowArray.push(
              <GameRow className={styles.gameRow} key={j}>
                {(() => {
                  let iCellArray = [];
                  for (let i = 0; i < boardSize; i++) {
                    iCellArray.push(<GameCell key={j + "-" + i} clickState={getClickState} row={j} column={i} getArray={getArray} updateArray={updateArray} getBeforeTile={getBeforeTile} setBeforeTile={setBeforeTile}></GameCell>);
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
    </>
  );
}

export default GameBoard;
