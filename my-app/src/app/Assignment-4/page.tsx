"use client";

import { CSSProperties } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
   const styleQuestion:CSSProperties = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontWeight: "bold",
    transition: "transform 0.3s, box-shadow 0.3s",
  };
  const router = useRouter();
  const questions = [
    "Input-Field",
    "Form",
    "inputWithDisplay",
    "password",
    "ToDo",
    "SearchFilter",
    "TemperatureConverter",
    "Form-Validation",
    "Modal-Dialog",
    "MUI-table_component",
    "complex-form",
    "DropDown",
    "Form-error-handling"
  ];
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}
    >

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          listStyle: "none",
          padding: 0,
        }}
      >
        {questions.map((ele,index) => (
          <li  style={styleQuestion} key={index}>
            <button onClick={()=>router.push(`Assignment-4/${ele}`)}> {ele} </button>
          </li>
        ))}
      </ul>
      
    </main>
  );
}
