import styled from "styled-components";
import { Board } from "./Board";

const StyledGame = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Game = () => {
  return (
    <StyledGame>
      <Board />
    </StyledGame>
  );
};
