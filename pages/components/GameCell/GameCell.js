import styles from "./GameCell.module.scss";

function GameCell(props) {
  
  const { children } = props;

  return (
      <div className={styles.gameCell}>
      </div>
  );
}

export default GameCell;
