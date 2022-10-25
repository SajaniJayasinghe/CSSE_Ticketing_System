const express = require("express");
const UserRouter = express.Router();
const userauth = require("../middlewear/userauth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { 
    RegisterUser, 
    LoginUser
} = require("../controllers/user.controller");

UserRouter.post("/registeruser", RegisterUser);
UserRouter.post("/login",LoginUser);

module.exports = UserRouter;