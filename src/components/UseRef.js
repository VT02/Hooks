// import React, { useEffect, useRef, useState } from "react";

// const UseRef = () => {
//   const [value, setValue] = useState(0);

//   const count = useRef(0);

//   useEffect(() => {
//     count.current++;
//   });

//   return (
//     <div>
//       <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
//       <h3>{value}</h3>
//       <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
//       <h4>Render Count : {count.current}</h4>
//     </div>
//   );
// };

// export default UseRef;

// How to use UseRef for accessing DOM elements

import React, { useRef } from "react";

const UseRef = () => {
  const ip = useRef();

  const handleClick = () => {
    console.log(ip.current);
    ip.current.style.background = "Pink";
  };

  return (
    <div>
      <input type="text" ref={ip} />
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default UseRef;
