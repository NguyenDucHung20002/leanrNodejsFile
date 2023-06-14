const mongoose = require("mongoose");
const { env } = require("../config/env");

const MONGO_URL = env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connect sucsess");
  })
  .catch(() => {
    console.log("connect fail");
  });
