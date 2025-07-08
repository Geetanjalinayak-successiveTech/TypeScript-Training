//1.Create a React component with an input field.
// Implement it as a controlled component where the input value is controlled by the component's state.
//  When the user types into the input field, the component's state should update accordingly.

"use client";
import { useState } from "react";

export default function InputField() {
  const [input, setInput] = useState("");

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        background: "#f4f4f4",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <input
         
          type="text"
          value={input}
          placeholder="Enter"
          onChange={(e) => {
            setInput(e.target.value)
          }}
           style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "250px",
            fontSize: "14px",
          }}
        />
      </div>

      <div>
        <h2 style={{ color: "Blue" }}>Text : {input}</h2>
      </div>
    </main>
  );
}
