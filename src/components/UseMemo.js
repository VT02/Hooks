import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calc Done");
    return Math.pow(num, 3);
  }

  const res = useMemo(() => {
    return cubeNum(number);
  }, [number]);

  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <h4>Cube of number : {res}</h4>
      <button onClick={() => setCounter(counter + 1)}>Counter++</button>
      <h4>Counter : {counter}</h4>
    </div>
  );
};

export default UseMemo;
