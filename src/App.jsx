import GameBoard from "./Components/GameBoard";
import { useContext } from "react";
import { gameContext } from "./lib/GameContext";
import Modal from "./Components/Modal";
import Hammer from "./Components/Hammer";

const App = () => {
  const { score, startOrStop } = useContext(gameContext);

  return startOrStop === "stop" ? (
    <>
      <Modal />
      <Hammer />
    </>
  ) : (
    <>
      <h1>{score}</h1>
      <Hammer />
      <GameBoard />
    </>
  );
};

export default App;
