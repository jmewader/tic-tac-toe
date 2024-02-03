import styled from "styled-components";
import { Square } from "./Square";

const StyledBoard = styled.div`
  width: 300px;
  height: 300px;
  background-color: aqua;
  display: flex;
  flex-wrap: wrap;
`;

export const Board = ({ squares, handleClick }: { squares: (string | null)[]; handleClick: (index: number) => void }) => {
  return (
    <StyledBoard>
      {squares.map((square, i) => (
        <Square key={i} value={square} handleClick={() => handleClick(i)} />
      ))}
    </StyledBoard>
  );
};
