const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  empEmail: {
    type: String,
    required: true,
  },
  empMobile: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
