import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
        <span>{counter}</span>
      <button onClick={handleClick}>Counter</button>
    </div>
  );
};

export default Counter;
