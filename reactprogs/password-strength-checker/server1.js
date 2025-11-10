// server.js
const express = require('express');
const app = express();

// Simple route
app.get('/hello', (req, res) => {
  res.json({ message: "Hello MERN Stack" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
