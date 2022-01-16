import { useContext } from "react";
import { gameContext } from "../lib/GameContext";
import { ModalStyles } from "../styles/ModalStyles";

const Modal = () => {
  const { setStartOrStop, score } = useContext(gameContext);

  return (
    <ModalStyles>
      <h3>{score ? `Your score: ${score}` : "Whack a Mole!"}</h3>
      <button onClick={() => setStartOrStop("start")}>Smack Here!</button>
    </ModalStyles>
  );
};

export default Modal;
