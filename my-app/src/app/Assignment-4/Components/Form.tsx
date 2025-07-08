"use client";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");

  return (
    <form
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
      </div>
      <div>
        <h3>Select Department</h3>

        <label>
          <input
            type="radio"
            name="Dept"
            value="Sales and Marketing"
            checked={department === "Sales and Marketing"}
            onChange={(e) => setDepartment(e.target.value)}
          />
          Sales and Marketing
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="Dept"
            value="Accounts Management"
            checked={department === "Accounts Management"}
            onChange={(e) => setDepartment(e.target.value)}
          />
          Accounts Management
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="Dept"
            value="Testing"
            checked={department === "Testing"}
            onChange={(e) => setDepartment(e.target.value)}
          />
          Testing
        </label>

        <br />
      </div>
      <div>
        <h3>Select Gender</h3>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </div>

      <div>
        <button onClick={(e)=>{
             e.preventDefault()
            console.log(`Name: ${name} , age:${age} , Department:${department} , Gender:${gender}`);
            
        }}>Submit</button>
      </div>
    </form>
  );
}




 