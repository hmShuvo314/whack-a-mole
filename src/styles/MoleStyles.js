import styled from "styled-components";
import mole from "../assets/images/mole.png";

export const MoleStyles = styled.div`
  display: block;
  width: 15vmin;
  height: 18vmin;
  position: relative;
  top: 100%;
  display: grid;
  place-content: center;
  font-size: 15vmin;
  width: 20vmin;
  transition: top 0.3s;
  z-index: 2;
  background: url(${mole}) no-repeat;
  background-size: contain;
  background-position: bottom;
  transform: scaleY(1.2);
`;
