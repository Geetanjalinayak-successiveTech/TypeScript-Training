'use client';
import { createContext, useState } from 'react';


type ThemeContextType={
  theme:string,
  toggleTheme:()=>void,
}
export const ThemeContext = createContext<ThemeContextType|null>(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme =  ():void =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
