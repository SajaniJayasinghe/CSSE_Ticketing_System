const express = require("express");
const UserRouter = express.Router();
const userauth = require("../middlewear/userauth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { 
    RegisterUser, 
   
} = require("../controllers/user.controller");

UserRouter.post("/registeruser", RegisterUser);


module.exports = UserRouter;