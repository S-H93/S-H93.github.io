import styles from "./HintRow.module.scss";

function HintRow(props) {
  
  const { children } = props;

  return (
      <div className={styles.HintRow}>
      { children }
      </div>
  );
}

export default HintRow;
