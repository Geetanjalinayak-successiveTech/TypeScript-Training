'use client';
import { createContext, ReactNode, useState } from 'react';


type ThemeContextType={
  theme:string,
  toggleTheme:()=>void,
}

interface prop{
  children:ReactNode
}
export const ThemeContext = createContext<ThemeContextType|null>(null);

export function ThemeProvider({ children}:prop) {
  const [theme, setTheme] = useState("light");

  const toggleTheme =  ():void =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
