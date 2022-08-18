import React, { useState } from "react";
import styles from "./GameCell.module.scss";

function GameCell(props) {
  const { clickState, row, column, getArray, updateArray } = props;
  const [getClass2, setClass2] = useState(0);
  // 0 = empty
  // 1 = filled
  // 2 = X

  function getClass(){
    return getArray[row][column];
  }

  function setClass(val){
    setClass2(val);
    updateArray(row, column, val);
  }

  function handleMouseDown(e) {
    e.preventDefault();
    if (e.button == 2) { // right click
      getClass() == 2 ? setClass(0) : setClass(2);
    } else{
      getClass() == 1 ? setClass(0) : setClass(1);
    }
  }

  function handleEnter(e) {
    if (clickState == 1) { // clicking on enter
      getClass() == 1 ? setClass(0) : setClass(1);
    } else if (clickState == 2) { // right clicking on enter
      getClass() == 2 ? setClass(0) : setClass(2);
    }
  }

  function handleMouseUp(e) {
    e.preventDefault();
  }

  return <div className={`${styles.gameCell} ${getClass2 == 1 ? styles.filled : getClass2 == 2 ? styles.crossed : ""}`} onMouseDown={handleMouseDown} onMouseEnter={handleEnter} onMouseUp={handleMouseUp} onContextMenu={(e)=> e.preventDefault()}></div>;
}

export default GameCell;
