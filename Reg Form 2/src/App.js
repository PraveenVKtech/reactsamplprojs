import React from 'react'
import './App.css'

function App() {
  const handleSubmit = (e) => {
    
    e.preventDefault()
    var name = document.getElementById("Username");
    
    var email = document.getElementById("Useremaiid");


    console.log(name.value)
    console.log(email.value)

     var user = {name:name,
      email:email,
      // password:password,
      // confirm_password:confirm_password,
      // address:address,
      // city:city,
      // state:state,
      // country:country,
      // pincode:pincode,
      // phone:phone,
      // age:age,
      // gender:gender
     }
     console.log(user)
  }
  return (
    <div className='App'>
      <form>
      <label>Enter your name: </label>
      <input id="Username" type="text" placeholder="Enter your name" /> <br />
      <label>Enter your email: </label>
      <input id="Useremaiid" type="text" placeholder="Enter your email" /> <br />
      <label>Enter your password: </label>
      <input type="text" placeholder="Enter your password" /> <br />
      <label>Enter your confirm password: </label>
      <input type="text" placeholder="Enter your confirm password" /> <br />
      <label>Enter your address: </label>
      <input type="text" placeholder="Enter your address" /> <br />
      <label htmlFor="city">Enter your city: </label>
      <input type="text" placeholder="Enter your city" /> <br />
      <label htmlFor="state">Enter your state: </label>
      <input type="text" placeholder="Enter your state" /> <br />
      <label htmlFor="country">Enter your country: </label>
      <input type="text" placeholder="Enter your country" /> <br /> 
      <label htmlFor="pincode">Enter your pincode: </label>
      <input type="tel" placeholder="Enter your pincode" /> <br />
      <label htmlFor="phone">Enter your phone number: </label>
      <input type="tel" placeholder="Enter your phone number" /> <br />
      <label htmlFor="age">Enter your age: </label>
      <input type="number" min={0} max={100}  placeholder="Enter your age" /> <br />
      <label htmlFor="gender">Enter your gender: </label>
      
      {/* generate html radio button for gender  */}
      <label htmlFor="gender">Enter your gender: </label>
      <input type="radio" name="gender" value="male" /> Male
      <input type="radio" name="gender" value="female" /> Female
      <input type="radio" name="gender" value="other" /> Other <br />
      <button onClick={handleSubmit}>Submit</button>

      </form>
      
    </div>
  )
}

export default App
