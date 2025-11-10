// server3.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json()); // Middleware to parse JSON

// ====================== MongoDB Connection ======================
mongoose.connect("mongodb://localhost:27017/studentdb")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ====================== Student Schema ==========================
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: Number, required: true, unique: true },
  branch: { type: String, required: true },
  cgpa: { type: Number, required: true }
});

const Student = mongoose.model("Student", studentSchema);

// ====================== Routes =================================

// POST → Add student
app.post("/api/students", async (req, res) => {
  try {
    const { name, roll, branch, cgpa } = req.body;
    const student = new Student({ name, roll, branch, cgpa });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET → Get all students
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// PUT → Update student
app.put("/api/students/:id", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Student not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE → Delete student
app.delete("/api/students/:id", async (req, res) => {
  const deleted = await Student.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Student not found" });
  res.json({ message: "Student deleted successfully" });
});

// ====================== Start Server ============================
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
