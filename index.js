require("dotenv").config();
const express = require("express");
const app = express();
require("./database/connect");
app.use(express.json());
const todoRouter = require("./routes/todosRoute");
const userRouter = require("./routes/authRoute");
const { env } = require("./config/env");

app.use("/todos", todoRouter);
app.use("/users", userRouter);
// Register route
const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
