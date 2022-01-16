import { useContext, useRef, useState } from "react";
import { gameContext } from "../lib/GameContext";
import { MoleStyles } from "../styles/MoleStyles";
import boom from "../assets/sounds/boom.wav";

const Mole = ({ idx, thrownAway, setThrownAway }) => {
  const { currentIdx, setScore } = useContext(gameContext);
  const [audio] = useState(new Audio(boom));
  const handleClick = () => {
    setThrownAway(true);
    setScore((prev) => prev + 1);
    setTimeout(() => {
      setThrownAway(false);
    }, 500);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <MoleStyles
      onClick={handleClick}
      className={
        thrownAway ? "thrownAway" : idx === currentIdx ? "visible" : ""
      }
    />
  );
};

export default Mole;
