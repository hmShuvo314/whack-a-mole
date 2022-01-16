import styled from "styled-components";

export const ModalStyles = styled.div`
  padding: 4vmin;
  display: grid;
  width: 50vw;
  height: 50vh;
  min-width: 300px;
  align-content: center;
  justify-items: center;
  gap: 5vmin;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 1vmin;
  h3 {
    font-size: 6vmin;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  button {
    background-color: rgba(255, 255, 255, 0.05);
    width: 25vmin;
    height: 15vmin;
    border: none;
    outline: none;
    border-radius: 2vmin;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
    font-size: 3vmin;
    font-weight: 700;
    cursor: none;
  }
`;
