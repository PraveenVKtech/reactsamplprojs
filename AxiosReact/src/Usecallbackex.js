import React, { useState} from "react";
import ChildA from "./ChildA";

export default function Usecallbackex() {
const [add, SetAdd] = useState(0);
console.log(add);
  return (
    <div>
      <h1>Learning Usecallback</h1>
      <ChildA />
      <p>{add}</p>
      <button onClick={() => SetAdd(add + 1)}>Addition</button>
    </div>
  );
}

