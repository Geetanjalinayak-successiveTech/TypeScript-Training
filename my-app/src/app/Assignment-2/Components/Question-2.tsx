//Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

"use client";
import { ChangeEvent, useState } from "react";

export default function PersonForm() {
  const [firstName, setFirstName] = useState<string>("");

  const [lastName, setlastName] = useState<string>("");

  const [age, setAge] = useState<string>("");

  return (
    <main>
      <h1>Enter your Information</h1>
      <form>
        <label> First Name:</label>
        <input type="text" 
        value={firstName}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setFirstName(e.target.value)}}/>

         <label> Last Name:</label>
        <input type="text" 
        value={lastName}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setlastName(e.target.value)}}/>

         <label> Age:</label>
        <input type="text" 
        value={age}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setAge(e.target.value)}}/>
      </form>


      <div>
        <h2>Entered Information</h2>

        <h4>First Name: {firstName}</h4>
        <h4>Last Name: {lastName}</h4>
        <h4>Age:{age}</h4>
      </div>
    </main>
  );
}
