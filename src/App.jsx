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
            <Route path="/secret_word" element={<Home />} />
            <Route path="/secret_word/gameplay" element={<GamePlay />} />
            <Route path="/secret_word/gameover" element={<GameOver />} />
          </Routes>
        </GameProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
