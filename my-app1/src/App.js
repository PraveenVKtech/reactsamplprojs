import React, { useState } from "react";

//to use state inreact we use usestate -> hook

function App() {

const [text, setText] = useState("Microdegree"); //What us text here

  function handleClick() {
    if (text === "Microdegree") {
      setText('Manikanta');
    } else {
      setText('Microdegree');
    }
    return (
      <>
        <h4>{text}</h4>
        <button type="button" onClick={handleClick}>Change title</button>
      </>

    )

  }

}
export default App;
