import styled from "styled-components";

export const HoleStyles = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  width: 25vmin;
  height: 27vmin;
  .mole {
    display: grid;
    position: relative;
    width: 22vmin;
    height: 22vmin;
    justify-content: center;
    align-content: flex-end;
  }
  .hidden {
    overflow: hidden;
  }
  img {
    object-fit: contain;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 5;
    user-select: none;
    -moz-user-select: none;
  }
  .visible {
    top: 0%;
    transition: top 0.3s;
    animation: animate 0.4s alternate infinite;
  }

  .thrownAway {
    top: 0%;
    animation: throw 0.5s linear 1;
  }

  @keyframes throw {
    0% {
      transform: translate(0%, 0%) rotateZ(0deg);
      opacity: 1;
      transform-origin: center;
    }
    25% {
      opacity: 0.67;
      transform: translate(100%, -100%) rotateZ(45deg);
      transform-origin: center;
    }
    50% {
      opacity: 0.33;
      transform: translate(200%, -200%) rotateZ(90deg);
      transform-origin: center;
    }
    100% {
      opacity: 0;
      transform: translate(300%, -300%) rotateZ(135deg);
      transform-origin: center;
    }
  }
  @keyframes animate {
    0% {
      transform: scaleY(1.2) rotateZ(10deg);
      transform-origin: bottom;
    }
    25% {
      transform: scaleY(1.2) rotateZ(-10deg);
      transform-origin: bottom;
    }
    50% {
      transform: scaleY(1.2) rotateZ(10deg);
      transform-origin: bottom;
    }
    100% {
      transform: scaleY(1.2) rotateZ(-10deg);
      transform-origin: bottom;
    }
  }
`;
