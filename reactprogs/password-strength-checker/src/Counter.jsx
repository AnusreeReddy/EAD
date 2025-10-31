import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>🔢 Counter App</h2>
      <h1 style={{ fontSize: "3rem", color: "#007bff" }}>{count}</h1>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            margin: "5px",
            padding: "10px 20px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          +
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            margin: "5px",
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          -
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            margin: "5px",
            padding: "10px 20px",
            background: "gray",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
