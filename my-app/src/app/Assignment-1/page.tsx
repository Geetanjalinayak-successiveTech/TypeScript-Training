import Link from "next/link";
import { CSSProperties } from "react";

export default function HomePage() {
  const styleQuestion:CSSProperties = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontWeight: "bold",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const question = [1, 2, 3, 4, 5, 6];
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "40px",
        fontFamily: "sans-serif",
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
        {question.map((num) => (
          <li  style={styleQuestion} key={num}>
            <Link href={`Assignment-1/question-${num}`}> Question -{num}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
