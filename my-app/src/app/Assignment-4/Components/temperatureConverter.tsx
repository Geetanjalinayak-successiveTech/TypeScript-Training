"use client";
import { useState } from "react";

export default function TemperatureConverter() {
  const [temp, setTemp] = useState(0);
  const [converter, setConverter] = useState<number>();

  function handleCelsius() {
    setConverter(((temp - 32) * 5) / 9);
  }

  function handleFareheit() {
    setConverter((temp * 9) / 5 + 32);
  }

  return (
    <main
     style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", 
        background: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px", 
      }}
    >
      <div style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px", 
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
        }}>
        <input
          type="Number"
          value={temp}
          onChange={(e) => setTemp(Number(e.target.value))}
        />

        <button onClick={handleCelsius}> Celsius </button>

        <button onClick={handleFareheit}> Farenheit </button>

        <h3>Converted Temperature : {converter}</h3>
      </div>
    </main>
  );
}
