'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface userType{
  username:string
}

export default function Home() {
  const [user, setUser] = useState<userType|null>(null);
  const router=useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <main style={{ padding: 30 }}>
      <h1>Home Page</h1>
      <p>{user ? `Welcome, ${user.username}!` : "Please log in."}</p>
      <div>
        
        <button onClick={()=>router.push("/Assignment-3/About")}> About </button>
        <button onClick={()=>router.push("/Assignment-3/Dashboard")}> Dashboard </button>
      </div>
    </main>
  );
}