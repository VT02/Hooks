import React, { useState } from "react";

const UseState = () => {
  const [car, setCar] = useState({
    brand: "Maruti",
    model: "Swift",
    year: "2014",
    color: "White",
  });

  const handleChange = () => {
    setCar({ ...car, color: "Black" });
  };

  return (
    <div>
      <h2>My {car.brand}</h2>
      <h3>
        It is a {car.color} {car.model} from {car.year}
      </h3>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default UseState;
