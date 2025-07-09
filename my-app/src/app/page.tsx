import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#5F9EA0",
        padding: "40px",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome to Assignments</h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          listStyle: "none",
          padding: 0,
        }}
      >
        {["1", "2", "3", "4", "5", "6"].map((num) => (
          <li
            key={num}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              fontWeight: "bold",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            <Link href={`/Assignment-${num}`}>Assignment-{num}</Link>
            
          </li>

          

          
        ))}
      </ul>
    </main>
  );
}
