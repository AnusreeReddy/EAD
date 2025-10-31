import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (sec) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>⏱ Timer App</h2>
      <h1>{formatTime(seconds)}</h1>
      <button onClick={() => setIsActive(true)}>Start</button>
      <button onClick={() => setIsActive(false)}>Pause</button>
      <button
        onClick={() => {
          setIsActive(false);
          setSeconds(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
