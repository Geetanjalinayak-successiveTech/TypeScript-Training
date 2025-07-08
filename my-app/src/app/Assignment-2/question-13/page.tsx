'use client';
import React, { useState } from "react";
import useClipboard from "../Components/useClipboard";

export default function ClipboardComponent() {
  const [input, setInput] = useState("");
  const { copied, copy } = useClipboard(input);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Copy to Clipboard</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type Text"
        style={{
          padding: "8px",
          width: "300px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
      <button
        onClick={copy}
        style={{
          padding: "8px 12px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Copy
      </button>
      {copied && <p style={{ color: "green" }}>Text copied!</p>}
    </div>
  );
}
