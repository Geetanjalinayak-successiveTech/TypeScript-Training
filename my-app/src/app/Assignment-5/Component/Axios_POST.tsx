"use client";
import { useState } from "react";
import axios from "axios";

export default function PostData() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  function handleSubmit():void {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: name,
        email: email,
      })
      .then(() => {
        console.log("Success");
        setSuccess(true);
        setError("");
        setName("");
        setEmail("");
      })
      .catch(() => {
        setError("Error submitting data");
        setSuccess(false);
      });
  }

  return (
    <main style={{ padding: 150 }}>
      <h2>Submit User Info</h2>
      <div>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {success && <p style={{ color: "green" }}>Data submitted successfully!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </main>
  );
}
