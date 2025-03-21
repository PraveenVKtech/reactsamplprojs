import React, { createContext } from "react";
import ChildA from "./ChildA";
const data = createContext();
const data1 = createContext();

function App() {
  const name = "Praveen Katti";
  const gender = "Male";
  //Create provider consumer

  return (
    <div>
      <data.Provider value={name}>
      <data1.Provider value={gender}>
        <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}
export default App;
export { data };
export { data1 };
