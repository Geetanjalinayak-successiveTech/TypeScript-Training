//Q4. Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
//Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
//Display the updated count on the screen.
"use client"; 
import { JSX } from "react";

import { useState } from "react";

export default function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  );
}




 
