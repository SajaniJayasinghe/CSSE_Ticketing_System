const express = require("express");
const UserRouter = express.Router();
const userauth = require("../middleware/userauth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  UserRegister,
  UserLogin,
  UserProfile,
  UserLogout,
  GetOneUser,
  UpdateUser,
  DeleteUserProfile,
  GetAllPassengers,
  GetAllInspector,
  DeleteUserById,
} = require("../controllers/user.controller");

UserRouter.post("/registeruser", UserRegister);
UserRouter.post("/login", UserLogin);
UserRouter.delete("/deleteuserbyid/:id", DeleteUserById);
UserRouter.get("/getone/:id", GetOneUser);
UserRouter.get("/getallpassengers", GetAllPassengers);
UserRouter.get("/getallinspectors", GetAllInspector);

UserRouter.get("/userprofile", userauth, UserProfile);
UserRouter.post("/userlogout", userauth, UserLogout);
UserRouter.put("/updateuser", userauth, UpdateUser);
UserRouter.delete("/deleteuser", userauth, DeleteUserProfile);

module.exports = UserRouter;
