import HintCol from "../HintCol/HintCol";
import HintRow from "../HintRow/HintRow";
import styles from "./Hints.module.scss";

function Hints(props) {
  const { boardSize, columns, rows } = props;

  return (
    <>
      <div className={styles.HintColumns}>
        {(() => {
          let hintColArray = [];
          for (let i = 0; i < boardSize; i++) {
            hintColArray.push(
            <HintCol key={"HintCol-" + i}>
              {(() => {
                let hintArray = [];
                for (let j = 0; j < columns[i].length; j++){
                  if(j == columns[i].length - 1){
                    hintArray.push(columns[i][j].toString());
                  }else{
                    hintArray.push(columns[i][j].toString() + " ");
                  }
                }
                return hintArray;
              })()}
            </HintCol>);
          }
          return hintColArray;
        })()}
      </div>
      <div className={styles.HintRows}>
        {(() => {
          let rowColArray = [];
          for (let i = 0; i < boardSize; i++) {
            rowColArray.push(
            <HintRow key={"HintRow-" + i}>
              {(() => {
                let hintArray = [];
                for (let j = 0; j < rows[i].length; j++){
                  if(j == rows[i].length - 1){
                    hintArray.push(rows[i][j].toString());
                  }else{
                    hintArray.push(rows[i][j].toString() + "　");
                  }
                }
                return hintArray;
              })()}
            </HintRow>);
          }
          return rowColArray;
        })()}
      </div>
    </>
  );
}

export default Hints;
