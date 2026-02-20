import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  return (
    <div className="search">
      <input
        placeholder="Search by ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => onSearch(id)}>Search</button>
    </div>
  );
}