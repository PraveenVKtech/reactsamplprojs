import React, { useState } from "react";


function App() {

const [text, setText] = useState("Microdegree");

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
