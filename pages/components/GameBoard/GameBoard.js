import React, { useState } from "react";
import styles from "./GameBoard.module.scss";
import GameRow from "../GameRow/GameRow";
import GameCell from "../GameCell/GameCell";
// import HintRow from "../HintRow/HintRow";
import HintCol from "../HintCol/HintCol";

function GameBoard(props) {
  const { boardSize, getClickState, setClickState } = props;
  const [getBeforeTile, setBeforeTile] = useState(undefined);
  // 1 = left click
  // 2 = right click

  var initialArray = [];
  for (let j = 0; j < boardSize; j++) {
    var rowArray = [];
    for (let i = 0; i < boardSize; i++) {
      rowArray.push(0);
    }

    initialArray.push(rowArray);
  }
  const [getArray, setArray] = useState(initialArray);

  function handleMouseDown(e) {
    if (e.button == 2) {
      setClickState(2);
    } else {
      setClickState(1);
    }
  }

  function updateArray(row, column, newValue) {
    let temp_array = getArray;
    temp_array[row][column] = newValue;
    setArray(temp_array);
  }

  return (
    <>
      <div className={styles.gameBoard} onMouseDown={handleMouseDown} onMouseUp={() => setClickState(0)}>
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
    </>
  );
}

export default GameBoard;
