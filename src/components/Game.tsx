import styled from "styled-components";
import { Board } from "./Board";
import { useEffect, useState } from "react";
import { getAWinner } from "@/helper";

const StyledGame = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const StyledButton = styled.button`
  width: 160px;
  height: 38px;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: 1px dashed;

  &:hover {
    background-color: #292929;
    transition: 0.3s all ease;
  }
`;

const StyledTextBlock = styled.p`
  font-size: 26px;
  text-align: center;
`;

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = getAWinner(board);

  const handleClick = (index: number) => {
    if (winner || board[index] || !xIsNext) return;

    const boardCopy = [...board];
    boardCopy[index] = "X";
    setBoard(boardCopy);
    setXIsNext(false);
  };

  const makeBotMove = () => {
    setTimeout(() => {
      const availableIndices = board.reduce((acc, square, index) => {
        if (!square) {
          acc.push(index);
        }
        return acc;
      }, [] as number[]);

      if (availableIndices.length === 0 || winner) return;

      const randomIndex = Math.floor(Math.random() * availableIndices.length);
      const botMoveIndex = availableIndices[randomIndex];

      const boardCopy = [...board];
      boardCopy[botMoveIndex] = "0";
      setBoard(boardCopy);
      setXIsNext(true);
    }, 500);
  };

  useEffect(() => {
    if (!xIsNext) {
      makeBotMove();
    }
  }, [xIsNext]);

  const startNewGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <StyledGame>
      <StyledButton onClick={startNewGame}>New Game</StyledButton>
      <Board squares={board} handleClick={handleClick} />
      <StyledTextBlock>{winner ? "Победитель " + winner : "Сейчас ходит " + (xIsNext ? "X" : "0")}</StyledTextBlock>
    </StyledGame>
  );
};
