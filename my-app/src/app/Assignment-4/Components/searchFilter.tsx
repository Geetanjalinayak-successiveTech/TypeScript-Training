"use client";
import { useState } from "react";

export default function Search() {
  const items = [
    { id: 1, name: "India" },
    { id: 2, name: "Pakistan" },
    { id: 3, name: "China" },
    { id: 4, name: "nepal" },
    { id: 5, name: "Srilanka" },
  ];

  const [search, setSearch] = useState("");

  const searchFilter = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
        background: "#f4f4f4",
      }}>
      <h2>Search your Country:</h2>

      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />

        <ul>
            {searchFilter.length>0 ? 
          (searchFilter.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))) : <h4> Not in the list </h4>}
        </ul>
      </div>
    </main>
  );
}
