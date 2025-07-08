"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
        <button onClick={() => router.push("/Assignment-5/FetchData")}>
          {" "}
          Fetch Data{" "}
        </button>

        <button onClick={() => router.push("/Assignment-5/Retry-user")}>
          {" "}
          Fetch Data with retry{" "}
        </button>

        <button
          onClick={() => router.push("/Assignment-5/fetchDataWithSpinner")}
        >
          {" "}
          Fetch Data with retry and Spinner{" "}
        </button>
        <button onClick={() => router.push("/Assignment-5/Pagination")}>
          {" "}
          Pagination{" "}
        </button>

        <button onClick={() => router.push("/Assignment-5/fetchDataWithAxios")}>
          {" "}
          fetch Data With Axios{" "}
        </button>

         <button onClick={() => router.push("/Assignment-5/Axios_POST")}>
          {" "}
          POST Data{" "}
        </button>

         <button onClick={() => router.push("/Assignment-5/AuthHOC")}>
          {" "}
         Authenticate page with HOC{" "}
        </button>

        <button onClick={() => router.push("/Assignment-5/Logger")}>
          {" "}
         Logger page with HOC{" "}
        </button>

        <button onClick={() => router.push("/Assignment-5/fetchDataHOC")}>
          {" "}
         Users Data{" "}
        </button>
      </div>
    </main>
  );
}
