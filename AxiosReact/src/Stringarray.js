import React from "react";

const myArray1 = ["apple", "banana", "orange", "Chilli"];

function Stringarray() {
  return (
    <>
      {myArray1.map((item) => {
        return <div>{item}</div>;
      })}
    </>
  );
}

export default Stringarray;
