const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  content: String,
  isCompleted: {
    default: false,
    type: Boolean,
  },
});

module.exports = mongoose.model("todo", TodoSchema);
