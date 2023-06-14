exports.env = {
  PORT: process.env.PORT || 3000,
  SECEET_KEY: process.env.SECEET_KEY || "123456",
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/nodejs-course",
  EXPIRED_IN: "1d",
};
