import { useEffect, useState } from "react";
import { GiThorHammer } from "react-icons/gi";
import { HammerStyles } from "../styles/HammerStyles";

const Hammer = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isHitting, setIsHitting] = useState(false);

  useEffect(() => {
    const handleMouseMove = ({ x, y }) => {
      setPosition({ top: y + "px", left: x + "px" });
    };

    const handleMouseUp = () => setIsHitting(false);
    const handleMouseDown = () => setIsHitting(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <HammerStyles style={position} className={isHitting ? "hitting" : ""}>
      <GiThorHammer />
    </HammerStyles>
  );
};

export default Hammer;
