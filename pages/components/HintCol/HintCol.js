import styles from "./HintCol.module.scss";

function HintCol(props) {
  
  const { children } = props;

  return (
      <div className={styles.HintCol}>
      { children }
      </div>
  );
}

export default HintCol;
