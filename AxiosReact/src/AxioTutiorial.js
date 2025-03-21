import axios from 'axios'
import React, {useState } from 'react'
import { useEffect } from 'react'

export default function AxioTutiorial() {
  const[userdata,setdata] = useState([]);
  useEffect(() =>{
    axios.get("https://api.escuelajs.co/api/v1/users")
    .then((response) => {console.log(response)
    setdata(response.data)
    })
    
  },[])
  return (
    <div>
            Axios Learning 

      {userdata.map((data) => {
        return(
          <>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        </>
        )
      })} 
      

    </div>
  )
}
