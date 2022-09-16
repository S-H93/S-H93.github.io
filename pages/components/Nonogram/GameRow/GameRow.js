import styles from "./GameRow.module.scss";

function GameRow(props) {
  
  const { children } = props;

  // The row component itself does not (currently) do anything and is just a container for styles.

  return (
      <div className={styles.gameRow}>
        { children }
      </div>
  );
}

export default GameRow;
