
"use client";
import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void, () => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  const saveValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, saveValue, removeValue];
}