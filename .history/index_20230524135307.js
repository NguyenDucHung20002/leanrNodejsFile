const express = require("express");
const fs = require("fs");
const crypto = require("crypto");
const app = express();
const path = require("path");
const PORT = 3000;
app.use(express.json());

// app.post("/todos", (req, res) => {
//   const { content } = req.body;
//   console.log("content:", content);
//   if (!content) {
//     return res.status(400).json({
//       success: false,
//       message: "invalid input",
//     });
//   }
//   fs.appendFileSync(pathName, `${content}\n`);
//   return res.status(400).json({
//     success: true,
//     message: "wrote file",
//   });
// });

// hashedPasswordUser();

function handleStringUser(data) {
  const splitUser = data.split("\n").splice(1);
  const getUsers = splitUser.map((val) => {
    const getUser = val.split(",");
    return {
      username: getUser[0],
      firstname: getUser[1],
      lastname: getUser[2],
      password: getUser[3].match(/[^\r]/g).join(""),
    };
  });
  return getUsers;
}

checkPasswordUser();
function checkPasswordUser() {
  const pathUser = path.join("user", "newUser.csv");
  const pathFake = path.join("user", "fake_users.csv");

  const readNewUsers = fs.readFileSync(pathUser, "utf8");
  const readFake = fs.readFileSync(pathFake, "utf8");
  const handleString = handleStringUser(readNewUsers);
  const handleStringFake = handleStringUser(readFake);

  const checkUser = handleStringFake.filter((val) => {
    return handleString.find((valFake) => valFake.username === val.username);
  });

  console.log("checkUser:", checkUser);

  // fs.readFile(pathUser, "utf8", (error, data) => {
  //   if (error) {
  //     console.error("Lỗi:", error);
  //     return;
  //   }

  //   const splitUser = data.split("\n").splice(1);
  //   splitUser.forEach((val) => {
  //     const getUser = val.split(",");
  //     const hashedPassword = crypto
  //       .createHash("sha256")
  //       .update(getUser[3])
  //       .digest("hex");

  //   });
  // });
}

function hashedPasswordUser() {
  const pathUser = path.join("user", "users.csv");
  fs.readFile(pathUser, "utf8", (error, data) => {
    if (error) {
      console.error("Lỗi:", error);
      return;
    }
    const splitUser = data.split("\n").splice(1);
    const pathName = path.join("user", "newUser.csv");
    fs.writeFileSync(pathName, "username,firstname,lastname,password");
    splitUser.forEach((val) => {
      const getUser = val.split(",");
      const hashedPassword = crypto
        .createHash("sha256")
        .update(getUser[3])
        .digest("hex");

      fs.appendFileSync(
        pathName,
        `\n${getUser[0]},${getUser[1]},${getUser[2]},${hashedPassword}`
      );
    });
  });
}

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
