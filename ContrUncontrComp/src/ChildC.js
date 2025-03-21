import React from "react";
import { data } from "./usecontextApp";
import { data1 } from "./usecontextApp";

function ChildC() {
  //Use usecontext 
  const name = React.useContext(data);
  const gender = React.useContext(data1);
  return (
    <div>
      <h1>My name is {name} and I am a {gender}</h1>
    </div>
  );
}

export default ChildC;
