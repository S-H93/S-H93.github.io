import React, { useState } from "react";
import styles from "./GameCell.module.scss";

function GameCell(props) {
  const { setBeforeTile, row, column, getArray, updateArray, getTapFillMode } = props;

  // Possible cell classes:
  // 0 = empty
  // 1 = filled
  // 2 = X

  // Get this cell's current class from the array
  function getClass() {
    if (getArray && getArray[row]) {
      return getArray[row][column];
    } else {
      return undefined;
    }
  }

  // Update this cell's class in the array
  function setClass(val) {
    updateArray(row, column, val);
  }

  // On initial click / tap, remember the initial class of this tile (only tiles with the same class will be changed if the user drags), and update with the new class
  function handleMouseDown(e) {
    // Prevent default action for non-touch click events
    if (e._reactName != "onTouchStart") {
      e.preventDefault();
    }
    setBeforeTile(getClass()); // remember the initial class of the clicked tile
    if (e.button == 2 || !getTapFillMode) {
      // if right click OR tapFillMode is set to X
      getClass() == 0 ? setClass(2) : setClass(0); // change to X if empty, or empty if X
    } else {
      // if left click OR tapFillMode is set to fill
      getClass() == 0 ? setClass(1) : setClass(0); // change to filled if empty, or empty if filled
    }
  }

  // When the user stops clicking/tapping, reset the beforeTile
  function handleMouseUp(e) {
    e.preventDefault();
    setBeforeTile(undefined);
  }

  return <div className={`${styles.gameCell} ${getClass() == 1 ? styles.filled : getClass() == 2 ? styles.crossed : ""}`} onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp} onContextMenu={(e) => e.preventDefault()}></div>;
}

export default GameCell;
