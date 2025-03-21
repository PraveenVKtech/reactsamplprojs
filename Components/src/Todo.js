import React from 'react'

function Todo(props) {
    console.log(props);
    
    const handleClick = () => {
        props.delete(props.title)
    }
  return (
    <div>
      <ol>
        <li>{props.title}</li>
        <li>{props.colour}</li>
        <li>Third</li>
      </ol>

    </div>
  )
}

export default Todo
