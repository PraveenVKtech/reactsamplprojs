import React from "react";

const Numberarray = () => {
const arrayData = [1, 2, 3, 4, 5, 6];

  return (
    <ol>
      {arrayData.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ol>``
  );
};

export default Numberarray;