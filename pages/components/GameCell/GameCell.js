import React, { useState } from "react";
import styles from "./GameCell.module.scss";

function GameCell(props) {
  const { clickState, row, column } = props;
  const [getClass, setClass] = useState(0);
  const [isClicking, setClicking] = useState(false);
  // 0 = empty
  // 1 = filled
  // 2 = X


  function handleMouseDown(e) {
    e.preventDefault();
    setClicking(true);
    if (e.button == 2) {
      getClass == 2 ? setClass(0) : setClass(2);
    } else{
      getClass == 1 ? setClass(0) : setClass(1);
    }
  }

  function handleEnter(e) {
    if (clickState == 1) {
      getClass == 1 ? setClass(0) : setClass(1);
    } else if (clickState == 2) {
      getClass == 2 ? setClass(0) : setClass(2);
    }
  }

  function handleMouseUp(e) {
    e.preventDefault();
    setClicking(false);
  }

  return <div className={`${styles.gameCell} ${getClass == 1 ? styles.filled : getClass == 2 ? styles.crossed : ""}`} onMouseDown={handleMouseDown} onMouseEnter={handleEnter} onMouseUp={handleMouseUp} onContextMenu={(e)=> e.preventDefault()}></div>;
}

export default GameCell;
