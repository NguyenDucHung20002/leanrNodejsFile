const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const PORT = 3000;

const pathName = path.join("user", "user.txt");

app.post("/todos", (req, res) => {
  const { content } = req.body;
  console.log("content:", content);
  if (!content) {
    return res.status(400).json({
      success: false,
      message: "invalid input",
    });
  }
  // fs.appendFileSync(pathName, `${content}\n`);
  // return res.status(400).json({
  //   success: true,
  //   message: "wrote file",
  // });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
