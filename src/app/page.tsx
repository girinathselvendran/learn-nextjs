"use client";
import React, { useState } from "react";
import EquationsComponent from "./EquationsComponent";

export default function Home() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <br />
      <br />
      <EquationsComponent />
    </div>
  );
}
