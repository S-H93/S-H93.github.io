import styles from "./MessageBoard.module.scss";

function MessageBoard(props) {
  const { guesses } = props;

  return <div className={styles.messageBoard}>{guesses}</div>;
}

export default MessageBoard;
