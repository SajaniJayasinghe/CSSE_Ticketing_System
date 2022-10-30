const express = require("express");
const AdminRouter = express.Router();
const adminauth = require("../middlewear/adminauth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  RegisterAdmin,
  LoginAdmin,
  GetAdminProfile,
  UpdateProfile,
  ProfileDelete,
} = require("../controllers/admin.controller");

AdminRouter.post("/registeradmin", RegisterAdmin);
AdminRouter.post("/adminlogin", LoginAdmin);
AdminRouter.get("/adminprofile/:id", adminauth, GetAdminProfile);
AdminRouter.put("/updateadmin",adminauth,UpdateProfile);
AdminRouter.delete("/deleteadmin/:id",ProfileDelete);

module.exports = AdminRouter;
