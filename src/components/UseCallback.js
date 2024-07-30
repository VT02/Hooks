import React, { useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => [setCount((prev) => prev + 1)];

  return (
    <div>
      <h5>{count}</h5>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default UseCallback;
