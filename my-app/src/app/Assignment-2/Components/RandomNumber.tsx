
"use client"
import { useState } from "react";

export default function RandomNumberGenerator() {
  const randomNumber =():number => Math.floor(Math.random() * 100) + 1;

  const [random, setRandom] = useState(randomNumber());

  return (
    <main>
      <h2>Random Number Generator</h2>
      <h4>Randon Number: {random}</h4>

      <button onClick={()=> setRandom(randomNumber())}> Click </button>
    </main>
  );
}
