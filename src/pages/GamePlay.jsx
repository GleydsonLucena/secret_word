import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../components/GameContext.jsx";
import Button from "../components/Button.jsx";
import HiddenWord from "../components/HiddenWord.jsx";
import FlashMessage from "../components/FlashMessage.jsx";
import { WordsList } from "../data/words.js";
import "../assets/styles/GamePlay.sass";

const pickWordAndCategory = (words) => {
  const categories = Object.keys(words);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const word =
    words[category][Math.floor(Math.random() * words[category].length)];
  return { word, category };
};

const GamePlay = () => {
  const { score, setScore, setWinConditional, setWord } = useGameContext();
  const [gameState, setGameState] = useState({
    pickedWord: "",
    pickedCategory: "",
    letters: [],
    attempts: 3,
    guessedLetters: [],
    wrongLetters: [],
    chosenLetter: "",
    flashMessage: "",
    isLost: false,
  });

  const navigate = useNavigate();
  const letterInputRef = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setGameState((prevState) => ({ ...prevState, chosenLetter: "" }));
    letterInputRef.current.focus();
  }, []);

  const handleOnClick = useCallback(() => {
    checkLetter(gameState.chosenLetter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.chosenLetter]);

  const checkLetter = useCallback(
    (chosenLetter) => {
      const normalizedLetter = chosenLetter.toLowerCase();
      if (
        gameState.guessedLetters.includes(normalizedLetter) ||
        gameState.wrongLetters.includes(normalizedLetter)
      ) {
        return;
      }

      if (gameState.letters.includes(normalizedLetter)) {
        setGameState((prevState) => ({
          ...prevState,
          guessedLetters: [...prevState.guessedLetters, normalizedLetter],
        }));
        setScore((prevScore) => prevScore + 100);
      } else {
        const newAttempts = gameState.attempts - 1;

        if (newAttempts <= 0) {
          setWinConditional("Você perdeu!");
          setGameState((prevState) => ({ ...prevState, isLost: true }));

          setTimeout(() => navigate("/gameover"), 0);
          return;
        }

        if (newAttempts === 1) {
          setGameState((prevState) => ({
            ...prevState,
            flashMessage: "Você tem apenas uma tentativa restante!",
          }));
          setTimeout(
            () =>
              setGameState((prevState) => ({ ...prevState, flashMessage: "" })),
            3000
          );
        }

        setGameState((prevState) => ({
          ...prevState,
          attempts: newAttempts,
          wrongLetters: [...prevState.wrongLetters, normalizedLetter],
        }));
      }
    },
    [gameState, navigate, setScore, setWinConditional]
  );

  useEffect(() => {
    const { word, category } = pickWordAndCategory(WordsList);
    setWord(word);
    setGameState({
      pickedWord: word,
      pickedCategory: category,
      letters: word.split("").map((letter) => letter.toLowerCase()),
      attempts: 3,
      guessedLetters: [],
      wrongLetters: [],
      chosenLetter: "",
      flashMessage: "",
    });
  }, [setWord]);

  useEffect(() => {
    if (gameState.guessedLetters.length > 0) {
      const allGuessed = gameState.letters.every((letter) =>
        gameState.guessedLetters.includes(letter)
      );
      if (allGuessed) {
        setWinConditional("Você ganhou!");
        navigate("/gameover");
      }
    }
  }, [
    gameState.guessedLetters,
    gameState.letters,
    navigate,
    setWinConditional,
    setWord,
  ]);

  return (
    <div className="gameplay-container">
      <p className="bold">
        Pontuação: <span>{score}</span>
      </p>
      <h2>Advinhe a palavra</h2>
      <p className="bold">
        Dica sobre a palavra: <span>{gameState.pickedCategory}</span>
      </p>
      <p>
        Você ainda tem <span>{gameState.attempts}</span> tentativa(s)
      </p>
      <div className="word-container">
        <HiddenWord
          letters={gameState.letters}
          guessedLetters={gameState.guessedLetters}
        />
      </div>
      <p>Tente adivinhar uma letra da palavra:</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            setGameState((prevState) => ({
              ...prevState,
              chosenLetter: e.target.value,
            }))
          }
          type="text"
          name="letraEscolhida"
          size="4"
          value={gameState.chosenLetter}
          ref={letterInputRef}
        />
        <Button onClick={handleOnClick} text="Jogar" width="low" />
      </form>
      <p>
        Letras já utilizadas:
        <span> {gameState.wrongLetters.join(", ")} </span>
      </p>
      {gameState.flashMessage && (
        <FlashMessage>{gameState.flashMessage}</FlashMessage>
      )}
    </div>
  );
};

export default GamePlay;
