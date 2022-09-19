import styles from "./Guess.module.scss";

function Guess(props) {
  
  const { guess, guesser } = props;

  return (
      <div className={styles.guess}>
        <span className={styles.guesser}>{guesser}: </span>
        <span className={styles.guess}>{guess}</span>
      </div>
  );
}

export default Guess;
