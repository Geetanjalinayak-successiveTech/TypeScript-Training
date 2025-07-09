"use client"
import { useState } from "react"



export default function DropDown()
{
    const [select,setSelect]= useState<string>("");
    const [isOpen,setIsOpen] = useState<boolean>(false)
    function handleClick()
    {
        setIsOpen(!isOpen)
    }

    function handleSelect(option:string)
    {
        setSelect(option)
        setIsOpen(false);
    }


    return(
        <main style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}>
             <h1>{select ? `Selected: ${select}` : "DropDown Select"}</h1>

      <div>
        <button onClick={handleClick}>Dropdown</button>

    
        {isOpen && (
          <ul style={{ padding: 0, listStyleType: "none", marginTop: "10px" }}>
            <li onClick={() => handleSelect("Option 1")}>Option 1</li>
            <li onClick={() => handleSelect("Option 2")}>Option 2</li>
            <li onClick={() => handleSelect("Option 3")}>Option 3</li>
          </ul>
        )}
      </div>
        </main>
    )
}