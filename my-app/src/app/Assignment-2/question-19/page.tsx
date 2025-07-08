"use client";

import { useState, useCallback } from "react";
import Child from "../Components/parent-child-callback";

export default function Parent() {
  const [count, setCount] = useState<number>(0);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div
      style={{
        padding: "100px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h4 style={{ color: "blue", fontSize: "24px", marginBottom: "20px" }}>
        Count: {count}
      </h4>
      <Child increment={handleCount} />
    </div>
  );
}
