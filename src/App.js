import React from "react";
import "./App.css";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";

const App = () => {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </div>
  );
};

export default App;
