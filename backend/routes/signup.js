const express = require("express");
const signupController = require("../controllers/signup");

const routers = express.Router();

routers.post("/register", signupController.createUserS);

module.exports = routers;

