import React from 'react'
import { useState } from 'react'

function UpperCase() {
  const [text, setText] = useState('');
  const [uppercaseText, setUppercaseText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    setUppercaseText(text.toUpperCase());
    
  };
  return (
    <div>
      <h1>Convert to Lowercase</h1>
      <input type="text" value={text} onChange={handleTextChange}/>
      <button onClick={handleButtonClick}>Convert to Uppercase</button>
      <p>Uppercase Text: {uppercaseText}</p>
    </div>
  )
}

export default UpperCase
