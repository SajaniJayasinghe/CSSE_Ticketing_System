const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// @Action - encrypt the password
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password, salt);
});

// @Action - Get auth token
AdminSchema.methods.generateAuthToken = async function () {
  const Admin = this;
  const token = jwt.sign({ _id: Admin._id }, "jwtSecret");
  Admin.tokens = Admin.tokens.concat({ token });
  await Admin.save();
  return token;
};

// @Action - Find staff by credentials
AdminSchema.statics.findByCredentials = async (username, password) => {
  const Admin1 = await admin.findOne({ username });
  if (!Admin1) {
    throw new Error("Please enter authorized UserName");
  }
  const isMatch = await bcrypt.compare(password, Admin1.password);
  if (!isMatch) {
    throw new Error("Password is not matched");
  }
  return Admin1;
};

const admin = mongoose.model("admin", AdminSchema);
module.exports = admin;
