const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const PORT = 3000;

console.log(path.join("user", "user.txt"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
