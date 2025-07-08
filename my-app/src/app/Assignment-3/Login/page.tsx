"use client";
import { ChangeEvent, FormEvent, InputEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  function handleLogin(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === "Geetanjali" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ username }));
      router.push("/Assignment-3/Home");
      
      
      

    } else {
      setMsg("Invalid Details");
    }
  }

  return (
    <main style={{ padding: 30 }}>
      <h1> Login</h1>
      <form onSubmit={handleLogin}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p style={{ color: "red" }}>{msg}</p>
    </main>
  );
}
