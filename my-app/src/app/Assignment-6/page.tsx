"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter();

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
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "300px",
        }}
      >
        <button onClick={() => Router.push("/Assignment-6/LazyLoading")}>
          {" "}
        LazyLoading{" "}
        </button>
      </div>
    </main>
  );
}
