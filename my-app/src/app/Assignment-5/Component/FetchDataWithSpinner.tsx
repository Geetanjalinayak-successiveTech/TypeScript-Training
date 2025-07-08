"use client";
import { useState } from "react";

interface userType{
  id:number,
  name:string,
  email:string
}

export default function Spinner({ users = [], error = false }) {
  const [userData, setUserData] = useState<userType[]>(users);
  const [hasError, setHasError] = useState(error);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setHasError(false);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed again");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 30 }}>
      <h1> Users</h1>

       {loading && (
        <div style={{ margin: "20px 0" }}>
          <span style={{ fontSize: 20 }}>⏳ Loading...</span>
        </div>
      )}
      {hasError ? (
        <>
          <p style={{ color: "red" }}> Error fetching users. Please try again.</p>
          <button onClick={retryFetch}>Retry</button>
        </>
      ) : (
        <ul>
          {userData.map((user) => (
            <li key={user.id} style={{ marginBottom: 10 }}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
