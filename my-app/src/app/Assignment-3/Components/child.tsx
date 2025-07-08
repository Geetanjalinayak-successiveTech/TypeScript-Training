'use client';
import { useContext } from 'react';
import { AuthContext} from './authContext';
import { ThemeContext } from './themeContext';

export default function ChildComponent() {

  const auth= useContext(AuthContext);
  if(!auth)return null
  const them= useContext(ThemeContext)
  if(!them) return null

  const { isLoggedIn, login, username } = auth
  const { theme, toggleTheme } = them

  

  return (
    <main style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
      }}>
    <div style={{backgroundColor: theme === "light" ? "#f9f9f9" : "#333",}}>
      <h2>{isLoggedIn ? `Welcome, ${username}!` : "Please log in."}</h2>

      {!isLoggedIn && (
        <button onClick={login} style={{ margin: "10px" }}>
          Login
        </button>
      )}

      <button onClick={toggleTheme}>
        Toggle Theme 
      </button>
    </div>
    </main>
  );
}
