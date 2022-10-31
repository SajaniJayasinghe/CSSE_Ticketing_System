const jwt = require("jsonwebtoken");
const config = require('config')
const admin = require("../models/admin.model");

const adminauth = async (req,res,next)=>{
    try {
        const token = req.header("Authorization");
        const decode = jwt.verify(token, "jwtSecret");
        const Admin = await admin.findOne({
            _id:decode._id,
            "tokens.token":token
        });
        if(!Admin){
            throw new Error("Please Authenticated");
          }
          req.token = token;
          req.Admin = Admin;
          next();

    } catch (error) {
        res.status(401).send({
             message: error.message
            });
        console.log("Error in adminauth.js middleware ", error.message);
    }
}

module.exports = adminauth;