import React, { useState } from "react";
import Hints from "../Hints/Hints.js";
import GameBoard from "../GameBoard/GameBoard.js";
import styles from "./Game.module.scss";

function Game(props) {
  const boardSize = 10;
  const columns = [[3], [3, 2], [2, 4], [4], [2], [2], [4], [1, 4], [1, 2, 2], [4]];
  const rows = [[3, 2], [3], [2, 2], [4], [4], [2, 2], [4, 1], [4, 2], [2, 2], [1]];
  const solution = "1110000110111000000011000011000000011110000001111000110011000111100001011110001100110000110000000001";
  const [getClickState, setClickState] = useState(0);

  function handleContextMenu(e) {
    e.preventDefault();
    setClickState(0);
  }

  function handleMouseUp(e) {
    setClickState(0);
  }

  return (
    <>
      <div className={styles.gameCnt} onContextMenu={handleContextMenu} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
        <Hints boardSize={boardSize} columns={columns} rows={rows} />
        <GameBoard boardSize={boardSize} getClickState={getClickState} setClickState={setClickState} solution={solution} />
      </div>
    </>
  );
}

export default Game;
