import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyCounter from './MyCounter';

function App() {
  const [parentCounter,setParentCounter]=useState(0);
  const [name,setName] = useState('');
  const [isChildComponentVisible,setisChildComponentVisible]=useState(true);
  function callbackFn(data)
  {
    setParentCounter(data);
  }
  function onchangeHandler(event)
  {
    //console.log(event.target.value);
    setName(event.target.value);
  }
  const SetVisibility=()=>{
    setisChildComponentVisible(!isChildComponentVisible);
  }
  return (
    <div className="App">

     <h1>Hi {name}</h1>
     <input type='text' placeholder='enter name' id='nameId' onChange={(event)=>onchangeHandler(event)}></input>
     <p>parent counter updated from child : {parentCounter}</p>
     <button onClick={SetVisibility}>Show/Hide Child Compo</button>
     <p>------child-----</p>
     {isChildComponentVisible?<MyCounter callback={callbackFn} name={name}/>:""}
    </div>
  );
}

export default App;
