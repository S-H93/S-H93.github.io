import React, { useState, useEffect } from "react";
import styles from "./Game.module.scss";
import hiddenVars from "../../../hiddenVars.json";
import MessageBoard from "../MessageBoard/MessageBoard.js";

import Guess from "../Guess/Guess.js";
import AnswerField from "../AnswerField/AnswerField";

const tmi = require("tmi.js");
const client = new tmi.Client({
  channels: [hiddenVars["twitch-user"]],
});

function Game(props) {
  const [guesses, setGuesses] = useState([]); //should rename this to messages
  const [guessArray, setGuessArray] = useState([]); // keep track of words guessed so far; TODO: disallow already guessed words
  const [letterState, setLetterState] = useState([]); // array of boolean values, keeping track of which letters in the solution have been found
  const [solution, setSolution] = useState(""); // solution to the current puzzle

  // set a new solution (when the solution changes, guessArray and letterState will reset as well)
  function initialize() {
    setSolution("magic");
  }

  //for messages
  function updateGuesses(newGuess, guesser) {
    let temp_array = guesses;
    temp_array.push(
      <Guess key={temp_array.length + 1} guess={newGuess} guesser={guesser} /> // push a new message to the message board
    );
    setGuesses([...temp_array]);
  }

  // add a new guess to the array
  function updateGuessArray(newGuess) {
    let temp_array = guessArray;
    temp_array.push(newGuess);
    setGuessArray([...temp_array]);
  }

  // function called if a correct guess is found
  function handleCorrectGuess() {
    alert("Yay!");
  }


  function handleGuess(guess) {
    //TODO: make sure it's a valid word
    if (guess === solution) {
      handleCorrectGuess();
    } else if (guess) {
      let temp_array = [...letterState];
      for (let i = 0; i < guess.length; i++) {
        if (solution[i] == guess[i]) {
          temp_array[i] = true;
        } else {
          temp_array[i] = letterState[i];
        }
      }
      setLetterState([...temp_array]);
    }
  }

  function handleMessage(channel, tags, message, self) {
    if (self) return true; // ignore own guesses (currently bot doesn't send guesses so this is unnecessary)
    if (message.length == 5) {
      console.log(`${tags["display-name"]}: ${message}`);
      updateGuesses(message, tags["display-name"]);
      updateGuessArray(message);
    }
  }
  useEffect(() => {
    handleGuess(guessArray[guessArray.length - 1]);
  }, [guessArray]);

  // update letter state when solution changes
  useEffect(() => {
    let temp_array = [];
    for (let i = 0; i < solution.length; i++) {
      temp_array.push(false);
    }
    setLetterState([...temp_array]);
    setGuessArray([]);
  }, [solution]);

  useEffect(() => {
    client.connect();
    client.on("message", (channel, tags, message, self) => {
      handleMessage(channel, tags, message, self);
    });
    initialize();
  }, []);
  return (
    <>
      <div className={styles.gameBoard}>
        <div className={styles.gameBoard__left}>
          <AnswerField solution={solution} letterState={letterState} />
        </div>
        <div className={styles.gameBoard__right}>
          <MessageBoard guesses={guesses} />
        </div>
      </div>
    </>
  );
}
export default Game;
