import React, { useState, useEffect} from "react";
import Hints from "../Hints/Hints.js";
import GameBoard from "../GameBoard/GameBoard.js";
import styles from "./Game.module.scss";
import puzzles from "../../data/puzzles10.json" // JSON containing all the puzzles

function Game(props) {
  const keys = Object.keys(puzzles); // keys of all the puzzles in the JSON file
  const [getPuzzleNum, setPuzzleNum] = useState(-1); // key of the current puzzle (-1 initially)
  const [isFirstRun, setFirstRun] = useState(true); // on the first run, generates an empty 0x0 puzzle board, but is refreshed with a real puzzle after initialization
  const [getClickState, setClickState] = useState(0); // keep track of if the user is clicking or not; 0 is not clicking, 1 is clicking, 2 is right clicking
  const [isPuzzleSolved, setPuzzleSolved] = useState(false); // update if current puzzle is solved

  var initialArray = [];
  const [rowHints, setRowHints] = useState([...initialArray]); // array representing the hints for each row from the JSON puzzle file; empty initially
  const [columnHints, setColumnHints] = useState([...initialArray]); // array representing the hints for each column from the JSON puzzle file; empty initially

  // Generate a new puzzle based on the parameter if passed or random if otherwise
  function getNewPuzzle(num) {
    let puzzleNum = num || Math.floor(Math.random() * keys.length); //choose a random puzzle if no parameter
    setPuzzleNum(puzzleNum); //update puzzle
    setColumnHints([...puzzles[puzzleNum]["column"]]); //update hints
    setRowHints([...puzzles[puzzleNum]["row"]]); //update rows
    setPuzzleSolved(false); // set puzzle to be unsolved if solved
  }

  //on initialization, generate a new random puzzle
  useEffect(() => {
    if(isFirstRun){
      getNewPuzzle();
    }
    setFirstRun(false);
  }, []);

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
        <Hints rowHints={rowHints} columnHints={columnHints} />
        <GameBoard getPuzzleNum={getPuzzleNum} getNewPuzzle={getNewPuzzle} getClickState={getClickState} setClickState={setClickState} rowHints={rowHints} columnHints={columnHints} setPuzzleSolved={setPuzzleSolved} isPuzzleSolved={isPuzzleSolved} />
      </div>
    </>
  );
}

export default Game;
