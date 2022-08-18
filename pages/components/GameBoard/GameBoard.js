import styles from "./GameBoard.module.scss";

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
              <div className={styles.gameRow} key={j}>
                {(() => {
                  let cells = [];
                  for (let i = 1; i <= boardSize; i++) {
                    cells.push(<div className={styles.gameCell} key={i}></div>);
                  }
                  return cells;
                })()}
              </div>
            );
          }
          return rows;
        })()}
      </div>
    </>
  );
}

export default GameBoard;
