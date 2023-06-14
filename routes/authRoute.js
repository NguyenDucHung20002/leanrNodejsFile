const express = require("express");
const router = express.Router();
const Auth = require("../controller/authController");
const authSchema = require("../validations/authSchema");
const validator = require("../middlewares/validator");

router.post("/register", validator(authSchema.registerSchema), Auth.register);
router.post("/login", validator(authSchema.loginSchema), Auth.login);

module.exports = router;
