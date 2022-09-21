import React, { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setcounter] = useState(initialValue);

  const handleClick = () => {
    setcounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
