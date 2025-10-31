import { useState } from "react";
import PasswordChecker from "./PasswordChecker";
import Timer from "./Timer";
import Counter from "./Counter";

export default function App() {
  const [activeApp, setActiveApp] = useState("password");

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
          padding: "10px",
          background: "#f0f0f0",
        }}
      >
        <button onClick={() => setActiveApp("password")}>
          Password Checker
        </button>
        <button onClick={() => setActiveApp("timer")}>Timer</button>
        <button onClick={() => setActiveApp("counter")}>Counter</button>
      </nav>

      {activeApp === "password" && <PasswordChecker />}
      {activeApp === "timer" && <Timer />}
      {activeApp === "counter" && <Counter />}
    </div>
  );
}
