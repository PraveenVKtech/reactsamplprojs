import React, { useState } from 'react'
import ChildX from './ChildX';


function App() {
    //Use callback Usage - Performance optimization
    const [add,setAdd] = useState(0);
    // const learning = React.useCallback(function learning(){
    //     console.log("Learning");
    // },[]);
    
  return (
    <div>
        <h1>Learning Use callback Hooks</h1>
        
        <ChildX/>
        <h1>{add}</h1>
        <button onClick={()=> setAdd(add+1)}> Addition</button>
      
    </div>
  )
}

export default App
