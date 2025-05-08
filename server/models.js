const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: String,
  email: String,
  password: String,
  role: String,
});

const Student = mongoose.model("studentdetails", studentSchema);

module.exports = Student;
