import React from 'react'
import Child from './Child'

function App() {
    function getData(data) {
        console.log(data)
    }
    
  return (
    <div>
      <Child getData = {getData}/>
    </div>
  )
}

export default App
