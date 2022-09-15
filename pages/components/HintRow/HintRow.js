import styles from "./HintRow.module.scss";

function HintRow(props) {
  
  const { children, num, rowHintsStatus } = props;

  // return false if the rowHintsStatus array is false for this row, otherwise true
  function getIsCorrect() {
    if(rowHintsStatus) {
      return rowHintsStatus[num];
    }
    else return true; //assume correct otherwise
  }

  return (
      <div className={`${styles.HintRow} ${!getIsCorrect() ? styles.incorrect : ""}`}>
      { children }
      </div>
  );
}

export default HintRow;
