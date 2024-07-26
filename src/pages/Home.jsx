import { Link } from "react-router-dom";

import Button from "../components/Button.jsx";

import "../assets/styles/Home.sass";

const Home = () => {
  return (
    <div className="home-container">
      <h1>
        Secret Word<span>.</span>
      </h1>
      <p>Clique no botão para começar jogar</p>
      <div>
        <Link to="gameplay">
          <Button
            onClick={() => console.log("Starting new game")}
            type="button"
            text="começar jogo"
            width="high" /*low ou high*/
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
