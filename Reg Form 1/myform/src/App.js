import React from "react";
import './Form.css';


function App() {
  return (
    <div className="container">
      <h1> Simple Test Form</h1>
      <form>
        <label> Firstname </label>
        <input type="text" placeholder="Enter First name" name ='Firstname' required/>
        <br></br>
        <label> Lastname </label>
        <input type="text" placeholder="Enter Last name" name ='Lastname' required/>
        <br></br>
        {/* Fix multiple selection of radio button issue */}
        <label  > Gender </label>
        <br></br>
        <input type="radio" name ='Gender' required/> Male
        <br></br>
        <input type="radio" name ='Gender' required/> FeMale
        <br></br>
        <input type="radio" name ='Gender' required/> other
        <br></br>
        <br></br>
        <label>Phone Number: </label>
        <input type="text" placeholder="Enter mobile Number" name ='Phone Number' required />
        <br></br>
        <label> Email ID : </label>
        <input type="email" placeholder="Enter ID" name ='Email ID' required />
        <br></br>
        <label> Select Subjects :</label>
        <select name="subjects" id="subjects">
          <option value="physics"> Physics </option>
          <option value="chemistry">Chemistry</option>
          <option value="Mats"> Maths </option>
          <option value="Biology"> Biology </option>
        </select>
        <br></br>
        <label>URL</label>
        <input type="url" placeholder="Enter the URL" />
        <br></br>
        <label>Add Photo:</label>
        <br></br>
        <input type='file' placeholder="Select Photo" input/>
        <br></br>
        <button>Submit</button>
        <button> Reset</button>
      </form>
    </div>
  );
}

export default App;
