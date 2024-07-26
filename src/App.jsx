import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./components/GameContext";
import Home from "./pages/Home";
import GamePlay from "./pages/GamePlay";
import GameOver from "./pages/GameOver";

import "./assets/styles/App.sass";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <GameProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gameplay" element={<GamePlay />} />
            <Route path="/gameover" element={<GameOver />} />
          </Routes>
        </GameProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
