import { useState } from "react";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ level: "", score: 0, color: "" });

  const checkStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score += 25;
    if (/[A-Z]/.test(pwd)) score += 25;
    if (/[0-9]/.test(pwd)) score += 25;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 25;

    let level = "";
    let color = "";
    if (score <= 25) {
      level = "Weak";
      color = "red";
    } else if (score <= 50) {
      level = "Fair";
      color = "orange";
    } else if (score <= 75) {
      level = "Good";
      color = "blue";
    } else {
      level = "Strong";
      color = "green";
    }

    setStrength({ level, score, color });
  };

  const handleChange = (e) => {
    const newPwd = e.target.value;
    setPassword(newPwd);
    checkStrength(newPwd);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        style={{ padding: "10px", width: "250px", margin: "10px" }}
      />
      <div
        style={{
          width: "250px",
          height: "10px",
          background: "#eee",
          borderRadius: "5px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: `${strength.score}%`,
            height: "10px",
            background: strength.color,
            borderRadius: "5px",
          }}
        ></div>
      </div>
      {password && (
        <p style={{ color: strength.color }}>{strength.level} Password</p>
      )}
    </div>
  );
}
