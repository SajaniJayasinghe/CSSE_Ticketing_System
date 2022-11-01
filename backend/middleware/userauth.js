const jwt = require("jsonwebtoken");
const config = require("config");
const user = require("../models/user.models");

const userauth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const User = await user.findOne({
      _id: decode._id,
      "tokens.token": token,
    });
    console.log(User);
    if (!User) {
      throw new Error("Please Authenticated");
    }
    req.token = token;
    req.User = User;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message });
    console.log("Error in auth.js middleware ", error.message);
  }
};

module.exports = userauth;
