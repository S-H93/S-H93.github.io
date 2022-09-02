import React, { useState, useEffect} from "react";
import Hints from "../Hints/Hints.js";
import GameBoard from "../GameBoard/GameBoard.js";
import styles from "./Game.module.scss";
import puzzles from "../../data/puzzles10.json"

function Game(props) {
  const keys = Object.keys(puzzles);
  const [getKey, setKey] = useState(-1);
  const [isFirstRun, setFirstRun] = useState(true);
  const [getClickState, setClickState] = useState(0);
  const [boardSize, setBoardSize] = useState(undefined);
  const [columns, setColumns] = useState(undefined);
  const [rows, setRows] = useState(undefined);

  function getNewPuzzle() {
    let key = Math.floor(Math.random() * keys.length);
    setKey(key);
    setBoardSize(puzzles[key]["rowSize"]);
    setColumns(puzzles[key]["column"]);
    setRows(puzzles[key]["row"]);
  }

  useEffect(() => {
    if(isFirstRun){
      getNewPuzzle();
    }
    setFirstRun(false);
  }, [])

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
        <GameBoard boardSize={boardSize} key={getKey} getClickState={getClickState} setClickState={setClickState} />
      </div>
    </>
  );
}

export default Game;
