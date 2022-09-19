import styles from "./AnswerField.module.scss";
import AnswerLetter from "../AnswerLetter/AnswerLetter";

function AnswerField(props) {
  
  const { solution, letterState } = props;

  return (
      <div className={styles.AnswerField}>
         {(() => {
                    let letterArray = [];
                    for (let i = 0; i < letterState.length; i++) {
                      letterArray.push(<AnswerLetter key={"AnswerLetter-"+i} letter={solution.substring(i, i+1)} isFound={letterState[i]} />);
                    }
                    return letterArray;
                  })()}
      </div>
  );
}

export default AnswerField;
