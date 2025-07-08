"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const currTime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(currTime);
  }, []);

  return (
    <main>
      <h2>Date and Time</h2>
      <h4>Current Time: {time.toLocaleString()}</h4>
    </main>
  );
}