import React from 'react'

const AddOnComp = (props) => {

    const OnClickHandle = () => {
        props.callback("Welcome Mr. "+props.text);
    }
  return (
    <div>
      <h1> In AddOnCOmp : {props.text}</h1>
      <button onClick={OnClickHandle}>Update With Exiting text</button>
    </div>
  )
}

export default AddOnComp
