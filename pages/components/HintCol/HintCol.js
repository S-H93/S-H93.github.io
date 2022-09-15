import styles from "./HintCol.module.scss";

function HintCol(props) {
  
  const { children, num, columnHintsStatus } = props;

  // return false if the columnHintsStatus array is false for this column, otherwise return true
  function getIsCorrect() {
    if(columnHintsStatus) {
      return columnHintsStatus[num];
    }
    else return true; //assume correct otherwise
  }

  return (
    <div className={`${styles.HintCol} ${!getIsCorrect() ? styles.incorrect : ""}`}>
        <div className={styles.inner}>
          { children }
        </div>
      </div>
  );
}

export default HintCol;
