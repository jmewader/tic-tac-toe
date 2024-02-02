import styled from "styled-components";
import { Square } from "./Square";

const StyledBoard = styled.div`
  width: 300px;
  height: 300px;
  background-color: aqua;
  display: flex;
  flex-wrap: wrap;
`;

export const Board = () => {
  return (
    <StyledBoard>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </StyledBoard>
  );
};
