const express = require("express");

const app = express();

const PORT = 3000;

const todo = [
  {
    id: 1,
    content: "Go Shopping",
  },
  {
    id: 2,
    content: "Hangout with girlfriend",
  },
];

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
