import { useContext, useEffect, useState } from "react";
import { gameContext } from "../lib/GameContext";
import { GameBoardStyles } from "../styles/GameBoardStyles";
import Hole from "./Hole";

const GameBoard = () => {
  const { setStartOrStop } = useContext(gameContext);
  const [holeCount] = useState([...new Array(6)]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartOrStop("stop");
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <GameBoardStyles>
      {holeCount.map((_, idx) => (
        <Hole idx={idx} key={idx} />
      ))}
    </GameBoardStyles>
  );
};

export default GameBoard;
