import React from "react";

const Friend = ({ name, age, desc }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Friend;
