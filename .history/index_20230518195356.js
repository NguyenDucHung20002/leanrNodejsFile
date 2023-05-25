const express = require("express");

const app = express();

const PORT = 3000;

const todos = [
  {
    id: 1,
    content: "Go Shopping",
  },
  {
    id: 2,
    content: "Hangout with girlfriend",
  },
];

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
