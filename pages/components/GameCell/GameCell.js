import React, { useState } from "react";
import styles from "./GameCell.module.scss";

function GameCell(props) {
  const { clickState, getBeforeTile, setBeforeTile, row, column, getArray, updateArray } = props;
  // 0 = empty
  // 1 = filled
  // 2 = X

  const [isBeingTouched, setBeingTouched] = useState(false);

  function getClass() {
    if (getArray && getArray[row]) {
      return getArray[row][column];
    } else {
      return undefined;
    }
  }

  function setClass(val) {
    updateArray(row, column, val);
  }

  function handleMouseDown(e) {
    if (e._reactName != "onTouchStart") {
      e.preventDefault();
    }
    setBeforeTile(getClass());
    if (e.button == 2) {
      // right click
      getClass() == 0 ? setClass(2) : setClass(0);
    } else {
      getClass() == 0 ? setClass(1) : setClass(0);
    }
  }

  function handleEnter(e) {
    if (clickState == 1) {
      // clicking on enter
      if (getBeforeTile == getClass()) {
        //matching initial clicked tile state
        getClass() == 0 ? setClass(1) : setClass(0);
      }
    } else if (clickState == 2) {
      // right clicking on enter
      if (getBeforeTile == getClass()) {
        //matching initial clicked tile state
        getClass() == 0 ? setClass(2) : setClass(0);
      }
    }
  }


  function handleMouseUp(e) {
    e.preventDefault();
    setBeforeTile(undefined);
    setBeingTouched(false);
  }

  return <div className={`${styles.gameCell} ${getClass() == 1 ? styles.filled : getClass() == 2 ? styles.crossed : ""}`} onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} onMouseEnter={handleEnter} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp} onContextMenu={(e) => e.preventDefault()}></div>;
}

export default GameCell;
