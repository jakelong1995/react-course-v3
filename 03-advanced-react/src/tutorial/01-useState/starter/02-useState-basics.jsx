import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>useState basics</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default UseStateBasics;
