"use client";

import { useState, ChangeEvent } from "react";

export default function CountWithSteps() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const increment = () => {
    setCount(count + Number(step));
  };

  const decrement = () => {
    setCount(count - Number(step));
  };

  const handleStep = (e:ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setStep(val === "" ? 1 : parseInt(val));
  };

  return (
    <main>
      <h2>Counter with steps</h2>
      <h4>Count: {count}</h4>
      <label>
        Step:
        <input type="text" value={step} onChange={handleStep} />
      </label>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </main>
  );
}
