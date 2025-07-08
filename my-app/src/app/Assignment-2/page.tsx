import Link from "next/link";
import { CSSProperties } from "react";

export default function QuestionPage() {
  const styleQuestion: CSSProperties = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontWeight: "bold",
    transition: "transform 0.3s, box-shadow 0.3s",
  };
  const question:number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <main>
      <ul>
        {question.map((num) => (
          <li style={styleQuestion} key={num}>
            <Link href={`Assignment-2/question-${num}`}> Question -{num}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
