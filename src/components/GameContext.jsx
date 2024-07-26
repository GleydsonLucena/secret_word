import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [winConditional, setWinConditional] = useState("");
  const [word, setWord] = useState("");

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        winConditional,
        setWinConditional,
        word,
        setWord,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGameContext = () => useContext(GameContext);
