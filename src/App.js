import React, { useState } from "react";
import "./styles/style.css";
import Friend from "./Friend";

const App = () => {
  const [name, setName] = useState("kusodir");
  const changeNameHandler = () => {
    setName("t0023656");
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeNameHandler}>change name</button>
    </div>
  );
};

export default App;
