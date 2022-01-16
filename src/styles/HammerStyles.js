import styled from "styled-components";

export const HammerStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  font-size: 20vmin;
  color: beige;
  transform: translate(0, -45%) rotateY(180deg) rotateZ(-15deg);
  transition: transform 0.1s;
  pointer-events: none;
  z-index: 9;
`;
