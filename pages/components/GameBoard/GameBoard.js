import React, { useState } from "react";
import styles from "./GameBoard.module.scss";
import GameRow from "../GameRow/GameRow";
import GameCell from "../GameCell/GameCell";

function GameBoard(props) {
  const boardSize = 10;
  const [getClickState, setClickState] = useState(0);
  
  const [getArray, setArray] = useState([]);
  // 1 = left click
  // 2 = right click

  function handleMouseDown(e){
    if (e.button == 2) {
      setClickState(2);
    } else{
      setClickState(1);
    }
  }


  var rowArray =[];
  return (
    <>
      <div className={styles.gameBoard} onMouseDown={handleMouseDown} onMouseUp={() => setClickState(0)}>
        {(() => {
          for (let j = 1; j <= boardSize; j++) {
            rowArray.push(
              <GameRow className={styles.gameRow} key={j}>
                {(() => {
                  let cellArray = [];
                  for (let i = 1; i <= boardSize; i++) {
                    cellArray.push(<GameCell className={styles.gameCell} key={j + '-' + i} clickState={getClickState} rowArray={rowArray} row={i} column={j}></GameCell>);
                  }
                  return cellArray;
                })()}
              </GameRow>
            );
          }
          return rowArray;
        })()}
      </div>
    </>
  );
}

export default GameBoard;
