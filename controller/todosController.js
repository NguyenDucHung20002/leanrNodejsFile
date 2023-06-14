const Todo = require("../models/todo");

const addTodo = async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({
      success: false,
    });
  }
  const newTodo = new Todo({
    content,
  });
  await newTodo.save();
  return res.status(201).json({
    success: true,
    user: req.user,
  });
};

const getTodo = async (req, res) => {
  const todos = await Todo.find();
  return res.status(201).json({
    success: true,
    data: todos,
  });
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    success: true,
  });
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  await Todo.findByIdAndUpdate(id, { content });
  return res.status(200).json({
    success: true,
  });
};

module.exports = {
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo,
};
