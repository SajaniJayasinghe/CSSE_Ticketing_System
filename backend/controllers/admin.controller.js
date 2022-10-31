const Admin = require("../models/admin.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Admin register
const RegisterAdmin = async (req, res) => {
  try {
    const { name, username, nic, email, phoneNumber, password } = req.body;
    const existingAdmin = await Admin.findOne({ username: username });

    if (existingAdmin) {
      throw new Error("Admin already exists");
    }

    const createdAdmin = {
      name,
      username,
      nic,
      email,
      phoneNumber,
      password,
    };

    const newadmin = new Admin(createdAdmin);
    await newadmin.save();
    const token = await newadmin.generateAuthToken();
    res
      .status(201)
      .send({ status: "Admin Created", user: newadmin, token: token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ error: error.message });
  }
};

//Admin login
const LoginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const Adm = await Admin.findByCredentials(username, password);
    const token = await Adm.generateAuthToken();
    res.status(200).send({ token: token, Adm: Adm });
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
};

//admin profile
const GetAdminProfile = async (req, res) => {
  try {
    console.log(req.Admin);
    res.status(201);
    res.send({
      status: "Admin Details Fetched",
      Admin: req.Admin,
    });
  } catch (error) {
    res.status(500);
    res.send({
      status: "Error with Admin Profile",
      error: error.message,
    });
  }
};

//Admin profile update
const UpdateProfile = async (req, res) => {
  try {
    const { name, nic, email, phoneNumber } = req.body;

    const adminUpdate = await Admin.findByIdAndUpdate(req.Admin._id, {
      name: name,
      nic: nic,
      email: email,
      phoneNumber: phoneNumber,
    });
    res.status(200).send({
      status: "Admin Profile Updated",
      Adm: adminUpdate,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
    console.log(error);
  }
};

//delete admin profile
const ProfileDelete = async (req,res)=>{
  try {
    const deleteProfile = await 
    Admin.findByIdAndDelete(req.params.id);
    res.status(200).send({
       status: "Admin Deleted", 
       user : deleteProfile
     });
  } catch (error) {
    res.status(500).send({ 
      status: "error with id", 
      error: error.message });
  }
}

module.exports = {
  RegisterAdmin,
  LoginAdmin,
  GetAdminProfile,
  UpdateProfile,
  ProfileDelete,
};
