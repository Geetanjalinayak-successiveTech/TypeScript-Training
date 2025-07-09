"use client";
import { useState, useEffect } from "react";

export default function TicTacToe() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);
  const [gameStatus, setGameStatus] = useState<string>("Your Turn");

  const checkResult = (b:string[]) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningLines) {
      const [x, y, z] = combo;
      if (b[x] && b[x] === b[y] && b[x] === b[z]) return b[x];
    }

    if (b.every((item) => item !== "")) return "Draw";
    return null;
  };

  const handleBoxClick = (i:number) => {
    if (!playerTurn || boxes[i] || gameStatus !== "Your Turn") return;
    const updatedBoxes = [...boxes];
    updatedBoxes[i] = "X";
    setBoxes(updatedBoxes);
    setPlayerTurn(false);
  };

  const compMove = () => {
    const emptySpots = [];
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] === "") {
        emptySpots.push(i);
      }
    }
    if (emptySpots.length === 0) return;
    const randomIndex =
      emptySpots[Math.floor(Math.random() * emptySpots.length)];
    const updatedBoxes = [...boxes];
    updatedBoxes[randomIndex] = "O";
    setTimeout(() => {
      setBoxes(updatedBoxes);
      setPlayerTurn(true);
    }, 1000);
  };

  useEffect(() => {
    const winner = checkResult(boxes);
    if (winner) {
      setGameStatus(winner === "Draw" ? "Draw" : `${winner} Wins`);
    } else if (!playerTurn) {
      compMove();
    } else {
      setGameStatus("Your Turn");
    }
  }, [boxes, playerTurn]);

  const resetGame = () => {
    setBoxes(Array(9).fill(""));
    setPlayerTurn(true);
    setGameStatus("Your Turn");
  };

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <h1>Tic Tac Toe</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: 5,
          justifyContent: "center",
        }}
      >
        {boxes.map((val, i) => (
          <div
            key={i}
            onClick={() => handleBoxClick(i)}
            style={{
              width: 80,
              height: 80,
              fontSize: 32,
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "1px solid #333",
            }}
          >
            {val}
          </div>
        ))}
      </div>
      <h2>{gameStatus}</h2>
      <button
        onClick={resetGame}
        style={{ marginTop: 15, padding: "8px 16px" }}
      >
        Reset
      </button>
    </div>
  );
}
