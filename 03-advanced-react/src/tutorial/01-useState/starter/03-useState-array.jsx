import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button onClick={() => removePerson(person.id)}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
