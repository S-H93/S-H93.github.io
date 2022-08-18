import styles from "./GameRow.module.scss";

function GameRow(props) {
  
  const { children } = props;

  return (
      <div className={styles.gameRow}>
        { children }
      </div>
  );
}

export default GameRow;
