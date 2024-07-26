import PropTypes from "prop-types";

import Letter from "./Letter";

import "../assets/styles/HiddenWord.sass";

const HiddenWord = ({ letters, guessedLetters }) => {
  const isLetter = (letter) => {
    return guessedLetters.includes(letter) ? letter : " ";
  };

  return (
    <div className="hiddenWord-container">
      {letters.map((letter, index) => (
        <Letter key={index} letter={isLetter(letter)} />
      ))}
    </div>
  );
};

HiddenWord.propTypes = {
  letters: PropTypes.array.isRequired,
  guessedLetters: PropTypes.array.isRequired,
};

export default HiddenWord;
