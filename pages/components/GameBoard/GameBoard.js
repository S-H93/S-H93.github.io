import styles from "./GameBoard.module.scss";
import GameRow from "../GameRow/GameRow";
import GameCell from "../GameCell/GameCell";

function GameBoard(props) {
  const boardSize = 10;

  var rowArray = [];
  var cellArray = [];

  return (
    <>
      <div className={styles.gameBoard}>
        {(() => {
          let rows = [];
          for (let j = 1; j <= boardSize; j++) {
            rows.push(
              <GameRow className={styles.gameRow} key={j}>
                {(() => {
                  let cells = [];
                  for (let i = 1; i <= boardSize; i++) {
                    cells.push(<GameCell className={styles.gameCell} key={i}></GameCell>);
                  }
                  return cells;
                })()}
              </GameRow>
            );
          }
          return rows;
        })()}
      </div>
    </>
  );
}

export default GameBoard;
