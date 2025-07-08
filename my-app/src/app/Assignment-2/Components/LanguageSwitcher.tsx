// .Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

"use client";

import { LanguageSwitcher } from "../question-5/page";
import { useContext } from "react";


type LangContextType = {
  lang: string;
  setLang: (value: string) => void;
};

export default function Language() {
  const { lang, setLang } = useContext(LanguageSwitcher as React.Context<LangContextType>);

  return (
    <main>
      <h1>{lang === "en" ? "Hello" : "Hola"}</h1>

      <button
        onClick={() => {
          if (lang === "en") {
            setLang("span");
          }
        }}
      >
        Translate to Spanish
      </button>

      <button
        onClick={() => {
          if (lang === "span") {
            setLang("en");
          }
        }}
      >
        Translate to English
      </button>
    </main>
  );
}

