import styles from "./AnswerLetter.module.scss";

function AnswerLetter(props) {
  
  const { letter, isFound } = props;

  return (
      <div className={styles.AnswerLetter}>
        {isFound ? letter : ""}
      </div>
  );
}

export default AnswerLetter;
