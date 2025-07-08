'use client';
import React, { useState } from "react";
import useLocalStorage from "../Components/useLocalStorage";

export default function UserPreference() {
  const [theme, setTheme, removeTheme] = useLocalStorage("theme", "light");
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Theme: {theme}</h2>

      <input
        type="text"
        placeholder="Type a theme"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setTheme(input)}>Save</button>
      <button onClick={removeTheme}>Remove</button>
    </div>
  );
}