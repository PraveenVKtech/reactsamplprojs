import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function AxiosPost() {
    const data = {fname:"",lname:""};
    const[inputData,setData] = useState(data);

const handleChange= (e) => {
        setData({...inputData,[e.target.name]:e.target.value});
    }

    const handleClick =(e) = {  
        // e.preventDefault();
        axios.post("http://jsonplaceholder.typicode.com/posts",inputData);
    }

    
    useEffect(() => {
        
    }, []);


    
  return (
    <div>
      <label> First Name :</label>
      <input type='text' name='fname' value ={inputData.fname} onChange={handleChange}/><br></br>  
      <label> Last Name :</label>
      <input type='text' name='lname' onChange={handleClick}></input><br></br> 
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default AxiosPost
