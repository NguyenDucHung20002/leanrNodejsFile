const express = require("express");
const fs = require("fs");
const crypto = require("crypto");
const app = express();
const path = require("path");
const PORT = 3000;
app.use(express.json());
const pathName = path.join("user", "users.csv");

app.post("/todos", (req, res) => {
  const { content } = req.body;
  console.log("content:", content);
  if (!content) {
    return res.status(400).json({
      success: false,
      message: "invalid input",
    });
  }
  fs.appendFileSync(pathName, `${content}\n`);
  return res.status(400).json({
    success: true,
    message: "wrote file",
  });
});

fs.readFile(pathName, "utf8", (error, data) => {
  if (error) {
    console.error("Lỗi:", error);
    return;
  }

  // Xử lý dữ liệu CSV ở đây
  const splitUser = data.split("\n").splice(1);
  const getUsers = splitUser.map((val) => {
    const getUser = val.split(",");
    const hashedPassword = crypto
      .createHash("sha256")
      .update(getUser[3])
      .digest("hex");
    return {
      username: getUser[0],
      firstName: getUser[1],
      lastName: getUser[2],
      password: hashedPassword,
    };
  });
  const pathName = path.join("user", "newUser.csv");
  fs.writeFileSync(pathName, "username,firstname,lastname,password");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
