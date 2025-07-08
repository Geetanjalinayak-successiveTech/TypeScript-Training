"use client";


import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

export default function QuestionPage() {
  const router = useRouter();

  const questions:string[]=["UserAuthentication","AuthenticationAndTheme", "Question-3-4", "product"]
   const styleQuestion:CSSProperties = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontWeight: "bold",
    transition: "transform 0.3s, box-shadow 0.3s",
  };
  

  return (
    <main>
      
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
            <button onClick={()=>router.push(`Assignment-3/${ele}`)}> {ele} </button>
          </li>
        ))}
      </ul>      
    </main>
  );
}
