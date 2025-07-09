'use client';
import { createContext, FC, ReactNode, useState } from 'react';

 type AuthContextType={
  isLoggedIn: boolean,
  login: ()=>void,
  username:string
}
interface Prop{
  children : ReactNode
}
export const AuthContext = createContext<AuthContextType| null>(null);

export function AuthProvider({ children}:Prop) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("Geetanjali");

  const login  = ():void => setIsLoggedIn(true);

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
    <AuthContext.Provider value={{ isLoggedIn, login, username }}>
      {children}
    </AuthContext.Provider>
    </main>
  );
}