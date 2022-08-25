import styles from "./HintCol.module.scss";

function HintCol(props) {
  
  const { children } = props;

  return (
      <div className={styles.HintCol}>
        <div className={styles.inner}>
          { children }
        </div>
      </div>
  );
}

export default HintCol;
