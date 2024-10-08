import { useState } from "react";

const UseStateObject = () => {
  const [Person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });
  const displayPerson = () => {
    setPerson({ name: "john", age: 25, hobby: "play games" });
  };
  return (
    <>
      <h3>{Person.name}</h3>
      <h3>{Person.age}</h3>
      <h3>{Person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        display person
      </button>
    </>
  );
};

export default UseStateObject;
