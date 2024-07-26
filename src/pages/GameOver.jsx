import { Link } from "react-router-dom";
import { useGameContext } from "../components/GameContext.jsx";

import Button from "../components/Button.jsx";

import "../assets/styles/Home.sass";

const GameOver = () => {
  const { score, setScore, winConditional, word } = useGameContext();

  const handleOnClick = () => {
    if (winConditional === "Você perdeu!") {
      setScore(0);
    }
  };

  const isLost = () => {
    return (
      <h3>
        A palavra era: <span>{word}</span>
      </h3>
    );
  };

  return (
    <div className="home-container">
      <h1>
        {winConditional ? winConditional : "Start Game"}
        <span>.</span>
      </h1>
      <h2>
        Sua pontuação foi: <span>{score}</span>
      </h2>

      {winConditional === "Você perdeu!" && isLost()}

      <div>
        <Link to="/gameplay">
          <Button
            onClick={handleOnClick}
            type="button"
            text="Novo jogo"
            width="high" /*low ou high*/
          />
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
