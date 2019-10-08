import React from "react";
import "../App.css";

export default function Row({ row, onChange:handleChange }) {
  return (
    <div>
      {row.map((num, numId) => (
        <input
          value={num}
          key={numId}
          onChange={e => handleChange(e.target.value, numId)}
        />
      ))}
    </div>
  );
}
