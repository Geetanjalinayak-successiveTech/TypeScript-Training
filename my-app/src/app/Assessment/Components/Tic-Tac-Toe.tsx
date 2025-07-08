"use client";
import { Box, Paper, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  return (
    <Box sx={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        Tic-Tac-Toe
      </Typography>

      <Box
        sx={{
          width: 300,
          height: 300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: 0,
          border: "4px solid #1976d2",
        }}
      >
        {[...Array(9)].map((_, index) => {
          return (
            <Paper
              key={index}
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                cursor: gameOver || board[index] ? "not-allowed" : "pointer",
                background: "#f5faff",
              }}
              onClick={() => handleClick(index)}
            >
              {board[index]}
            </Paper>
          );
        })}
      </Box>

      <Typography variant="h6" sx={{ marginTop: "1rem" }}>
        {gameOver ? "Game Over!" : `${isXNext ? "X" : "O"}`}
      </Typography>

      <Button
        variant="contained"
        sx={{ marginTop: "1rem" }}
        onClick={handleReset}
      >
        Reset
      </Button>
    </Box>
  );
}
