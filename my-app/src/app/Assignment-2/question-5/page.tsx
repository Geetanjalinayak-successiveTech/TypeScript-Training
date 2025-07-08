"use client";

import { createContext, useState } from "react";
import Language from "../Components/LanguageSwitcher";

type LanguageSwitcherType={
  lang:string,
  setLang: (value:string)=>void
}
const LanguageSwitcher = createContext<LanguageSwitcherType |null>(null); 

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    
    <LanguageSwitcher.Provider value={{ lang, setLang }}>
      <div>
        <Language />
      </div>
    </LanguageSwitcher.Provider>
  );
}

export { LanguageSwitcher };
