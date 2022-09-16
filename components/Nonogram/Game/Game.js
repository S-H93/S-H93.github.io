import React, { useState, useEffect } from "react";
import Hints from "../Hints/Hints.js";
import GameBoard from "../GameBoard/GameBoard.js";
import styles from "./Game.module.scss";
import puzzles from "../data/puzzles10.json"; // JSON containing all the puzzles

function Game(props) {
  const keys = Object.keys(puzzles); // keys of all the puzzles in the JSON file
  const [getPuzzleNum, setPuzzleNum] = useState(-1); // key of the current puzzle (-1 initially)
  const [isFirstRun, setFirstRun] = useState(true); // on the first run, generates an empty 0x0 puzzle board, but is refreshed with a real puzzle after initialization
  const [getClickState, setClickState] = useState(0); // keep track of if the user is clicking or not; 0 is not clicking, 1 is clicking, 2 is right clicking
  const [isPuzzleSolved, setPuzzleSolved] = useState(false); // update if current puzzle is solved
  const [rowHints, setRowHints] = useState([]); // array representing the hints for each row from the JSON puzzle file; empty initially
  const [columnHints, setColumnHints] = useState([]); // array representing the hints for each column from the JSON puzzle file; empty initially
  const [rowHintsStatus, setRowHintsStatus] = useState([]); // array containing boolean values, changes to "false" if the row does not match the hint provided when the user checks their answer
  const [columnHintsStatus, setColumnHintsStatus] = useState([]); // array containing boolean values, changes to "false" if the column does not match the hint provided when the user checks their answer
  
  // Generate a new puzzle based on the parameter if passed or random if otherwise
  function getNewPuzzle(isFirstRun, num) {
    if (isFirstRun || isPuzzleSolved || confirm("Abandon the current puzzle?") == true) { //Don't show popup when generating the first puzzle or if the puzzle is solved
      let puzzleNum = num || Math.floor(Math.random() * keys.length); //choose a random puzzle if no parameter
      setPuzzleNum(puzzleNum); //update puzzle
      setColumnHints([...puzzles[puzzleNum]["column"]]); //update hints
      setRowHints([...puzzles[puzzleNum]["row"]]); //update rows
      setPuzzleSolved(false); // set puzzle to be unsolved if solved
    }
  }

  //on initialization, generate a new random puzzle
  useEffect(() => {
    if (isFirstRun) {
      getNewPuzzle(true);
    }
    setFirstRun(false);
  }, []);

  //Update the hints status arrays once the hints change (= when the puzzle changes)
  useEffect(() => {
    let temp_array = [];
    for (let i = 0; i < columnHints.length; i++){
      temp_array.push(true);
    }
    setColumnHintsStatus([...temp_array]);

    let temp_array2 = [];
    for (let i = 0; i < rowHints.length; i++){
      temp_array2.push(true);
    }
    setRowHintsStatus([...temp_array2]);
  }, [columnHints, rowHints]);

  //prevent right clicks from opening the context menu
  function handleContextMenu(e) {
    e.preventDefault();
    setClickState(0); // reset the click state (in case the user clicked and dragged off the board)
  }

  // reset the click state (in case the user clicked and dragged off the board)
  function handleMouseUp(e) {
    setClickState(0);
  }

  return (
    <>
      <div className={styles.gameCnt} onContextMenu={handleContextMenu} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
        <Hints rowHints={rowHints} columnHints={columnHints} rowHintsStatus={rowHintsStatus} columnHintsStatus={columnHintsStatus} />
        <GameBoard getPuzzleNum={getPuzzleNum} getNewPuzzle={getNewPuzzle} getClickState={getClickState} setClickState={setClickState} rowHints={rowHints} columnHints={columnHints} rowHintsStatus={rowHintsStatus} setRowHintsStatus={setRowHintsStatus} columnHintsStatus={columnHintsStatus} setColumnHintsStatus={setColumnHintsStatus} setPuzzleSolved={setPuzzleSolved} isPuzzleSolved={isPuzzleSolved} />
      </div>
    </>
  );
}

export default Game;
