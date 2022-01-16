import { useState } from "react";
import { HoleStyles } from "../styles/HoleStyles";
import Mole from "./Mole";
import hole from "../assets/images/hole.png";

const Hole = ({ idx }) => {
  const [thrownAway, setThrownAway] = useState(false);

  return (
    <HoleStyles>
      <div className={`mole ${!thrownAway ? "hidden" : ""}`}>
        <Mole idx={idx} thrownAway={thrownAway} setThrownAway={setThrownAway} />
      </div>
      <img src={hole} alt="hole" />
    </HoleStyles>
  );
};

export default Hole;
