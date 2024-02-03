import styled from "styled-components";

const StyledSquare = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 1px solid #2222;
  color: #2222;
  cursor: pointer;
  outline: none;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #43f9ff92;
    transition: 0.3s all ease;
  }
`;

export const Square = ({ value, handleClick }: { value: any; handleClick: () => void }) => {
  return <StyledSquare onClick={handleClick}>{value}</StyledSquare>;
};
