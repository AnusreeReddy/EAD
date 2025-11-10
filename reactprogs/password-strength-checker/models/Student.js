const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: Number, required: true, unique: true },
  branch: { type: String, required: true },
  cgpa: { type: Number, default: 0 }
});

module.exports = mongoose.model("Student", studentSchema);
