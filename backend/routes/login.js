const express = require("express");
const cors  = require("cors");

const {login} = require("../controllers/login");

const routers  = express.Router();

routers.use(cors());

routers.post("/login",login);

module.exports = routers;