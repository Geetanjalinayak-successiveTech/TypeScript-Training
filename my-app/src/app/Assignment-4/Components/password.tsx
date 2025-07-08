"use client";

import { useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    password === verifyPassword
      ? setMessage("Password Created Successfully")
      : setMessage("Please enter same password");
  }

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background: "#f4f4f4",
      }}
    >
      <form>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
        <br />

        <button onClick={handleClick}>Submit </button>
        <h3>{message}</h3>
      </form>
    </main>
  );
}
