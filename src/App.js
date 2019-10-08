import React, { useState } from "react";
import Grid from "./components/Grid";
import "./App.css";

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

export default function App() {
  const [state, setState] = useState(data);
  const handleChange = (value, rowId, numId) => {
    const nextValue = parseInt(value,10);
    const nextRow = [
      ...state[rowId].slice(0, numId),
      isNaN(nextValue)?0:nextValue,
      ...state[rowId].slice(numId + 1)
    ];
    const nextState = [
      ...state.slice(0, rowId),
      nextRow,
      ...state.slice(rowId + 1)
    ];
    setState(nextState);
  };
  return (
    <div className="App">
      <Grid data={state} onChange={handleChange} />
    </div>
  );
}