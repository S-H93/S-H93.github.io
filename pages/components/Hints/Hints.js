import HintCol from "../HintCol/HintCol";
import HintRow from "../HintRow/HintRow";
import styles from "./Hints.module.scss";

function Hints(props) {
  const { columnHints, rowHints } = props;

  return (
    <>
      <div className={styles.HintColumns}>
        {/* Generate the HintCol components based on the props passed */}
        {(() => {
          let hintColArray = [];
          if(columnHints){
            for (let i = 0; i < columnHints.length; i++) {
              hintColArray.push(
              <HintCol key={"HintCol-" + i}>
                {(() => {
                  let hintArray = [];
                  for (let j = 0; j < columnHints[i].length; j++){
                    if(j == columnHints[i].length - 1){
                      hintArray.push(columnHints[i][j].toString());
                    }else{
                      hintArray.push(columnHints[i][j].toString() + " ");
                    }
                  }
                  return hintArray;
                })()}
              </HintCol>);
            }
          }
          return hintColArray;
        })()}
      </div>
      <div className={styles.HintRows}>
        {/* Generate the HintRow components based on the props passed */}
        {(() => {
          let hintRowArray = [];
          if(rowHints){
            for (let i = 0; i < rowHints.length; i++) {
              hintRowArray.push(
              <HintRow key={"HintRow-" + i}>
                {(() => {
                  let hintArray = [];
                  for (let j = 0; j < rowHints[i].length; j++){
                    if(j == rowHints[i].length - 1){
                      hintArray.push(rowHints[i][j].toString());
                    }else{
                      hintArray.push(rowHints[i][j].toString() + " ");
                    }
                  }
                  return hintArray;
                })()}
              </HintRow>);
            }
          }
          return hintRowArray;
        })()}
      </div>
    </>
  );
}

export default Hints;
