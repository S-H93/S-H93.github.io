import React, { useState, useEffect } from "react";
import styles from "./GameCell.module.scss";

function GameCell(props) {
  const { clickState, getBeforeTile, setBeforeTile, row, column, getArray, updateArray } = props;
  // 0 = empty
  // 1 = filled
  // 2 = X


  function getClass(){
    return getArray[row][column];
  }

  function setClass(val){
    updateArray(row, column, val);
  }

  function handleMouseDown(e) {
    e.preventDefault();
    setBeforeTile(getClass());
    if (e.button == 2) { // right click
      getClass() == 0 ? setClass(2) : setClass(0);
    } else{
      getClass() == 0 ? setClass(1) : setClass(0);
    }
  }

  function handleEnter(e) {
    if (clickState == 1) { // clicking on enter
      if (getBeforeTile ==  getClass()) { //matching initial clicked tile state
        getClass() == 0 ? setClass(1) : setClass(0);
      }
    } else if (clickState == 2) { // right clicking on enter
      if (getBeforeTile ==  getClass()) { //matching initial clicked tile state
        getClass() == 0 ? setClass(2) : setClass(0);
      }
    }
  }

  function handleMouseUp(e) {
    e.preventDefault();
    setBeforeTile(undefined);
  }

  return <div className={`${styles.gameCell} ${getClass() == 1 ? styles.filled : getClass() == 2 ? styles.crossed : ""}`} onMouseDown={handleMouseDown} onMouseEnter={handleEnter} onMouseUp={handleMouseUp} onContextMenu={(e)=> e.preventDefault()}></div>;
}

export default GameCell;
