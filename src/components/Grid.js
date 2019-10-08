import React from "react";
import Row from "./Row";
import "../App.css";

export default function Grid({ data, onChange:handleChange }) {
  return (
    <div>
      {data.map((row, rowId) => (
        <Row
          row={row}
          key={rowId}
          onChange={(value,numId)=>handleChange(value,rowId,numId)}
        />
      ))}
    </div>
  );
}
