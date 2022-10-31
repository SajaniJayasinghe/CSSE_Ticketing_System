// const User = require("../models/user.models");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// //user register
// const RegisterUser = async (req, res) => {
//     try {
//       const { name, username,nic, phoneNumber,myplan, password } = req.body;
//       const existingUser = await User.findOne({ username: username });

//       if (existingUser) {
//         throw new Error("User already exists");
//       }

//       const createdUser = {
//         name,
//         username,
//         nic,
//         phoneNumber,
//         myplan,
//         password
//       };

//       const newuser = new User(createdUser);
//       await newuser.save();
//       const token = await newuser.generateAuthToken();
//       res
//         .status(201)
//         .send({ status: "User Created", user: newuser, token: token });
//     } catch (error) {
//       console.log(error.message);
//       return res.status(500).send({ error: error.message });
//     }
//   };

// //user login
// const LoginUser = async (req, res) => {
//     try {
//       const { username, password } = req.body;
//       const User_s = await User.findByCredentials(username, password);
//       const token = await User_s.generateAuthToken();
//       res.status(200).send({ token: token, User_s: User_s });
//     } catch (error) {
//       res.status(500).send({ error: error.message });
//       console.log(error);
//     }
//   };

// //user profile
// const GetUserProfile = async (req,res)=>{
//     try {
//       console.log(req.User);
//       res.status(201);
//       res.send({
//         status : "User Details Fetched",
//         User :req.User
//       });
//     } catch (error) {
//       res.status(500)
//       res.send({
//         status: "Error with User Profile",
//         error : error.message
//       });
//     }
//   }

// //user profile update
// const UpdateProfile = async (req,res)=>{
//     try {
//       const {
//         name,
//         nic,
//         phoneNumber,
//         myplan,
//       } = req.body

//       const userUpdate = await User.findByIdAndUpdate(req.User._id,
//         {
//           name:name,
//           nic:nic,
//           phoneNumber:phoneNumber,
//           myplan:myplan
//         })
//         res.status(200).send({
//           status: "User Profile Updated",
//           User_s: userUpdate
//         })
//     } catch (error) {
//         res.status(500).send({error: error.message})
//         console.log(error)
//     }
//   }

// //delete user profile
// const ProfileDelete = async (req,res)=>{
//     try {
//       const deleteProfile = await
//       User.findByIdAndDelete(req.params.id);
//       res.status(200).send({
//          status: "User Deleted",
//          user : deleteProfile
//        });
//     } catch (error) {
//       res.status(500).send({
//         status: "error with id",
//         error: error.message });
//     }
//   }

//   module.exports = {
//     RegisterUser,
//     LoginUser,
//     GetUserProfile,
//     UpdateProfile,
//     ProfileDelete
//   };

const bcrypt = require("bcrypt");
const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const QRCode = require("qrcode");

// User Register Function
// (Admin , LocalPassenger , ForeignPassenger , Inspector)
const UserRegister = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNo,
      nic,
      passportNo,
      country,
      userExpDate,
      route,
      role,
      busID,
    } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      if (role == "Admin") {
        const data = {
          firstName: firstName,
          lastName: lastName,
          fullName: firstName + " " + lastName,
          email: email,
          phoneNo: phoneNo,
          nic: nic,
          password: hashedPassword,
          role: role,
        };
        const newAdmin = await User.create(data);
        if (newAdmin) {
          res
            .status(200)
            .send({ status: true, message: "Admin registered successfully" });
        } else {
          res
            .status(400)
            .send({ status: false, message: "Admin registration failed" });
        }
      } else if (role == "LocalPassenger") {
        const data = {
          firstName: firstName,
          lastName: lastName,
          fullName: firstName + " " + lastName,
          email: email,
          phoneNo: phoneNo,
          nic: nic,
          password: hashedPassword,
          totalCredit: 0.0,
          role: role,
        };
        const newLocalPassenger = await User.create(data);
        if (newLocalPassenger) {
          let data = {
            userID: newLocalPassenger._id,
          };
          let stringData = JSON.stringify(data);

          QRCode.toDataURL(stringData, function (err, GenaratedQR) {
            if (err) {
              console.log("error occurred in QR code generation");
            } else {
              User.findByIdAndUpdate(
                newLocalPassenger._id,
                { smartCard: GenaratedQR },
                { new: true },
                (err, updatedUser) => {
                  if (err) {
                    res.status(400).send({
                      status: false,
                      message: "Local Passenger registration failed",
                    });
                  } else {
                    res.status(200).send({
                      status: true,
                      message: "Local Passenger registered successfully",
                    });
                  }
                }
              );
            }
          });
        } else {
          res.status(400).send({
            status: false,
            message: "Local Passenger registration failed",
          });
        }
      } else if (role == "ForeignPassenger") {
        const data = {
          firstName: firstName,
          lastName: lastName,
          fullName: firstName + " " + lastName,
          email: email,
          phoneNo: phoneNo,
          passportNo: passportNo,
          password: hashedPassword,
          totalCredit: 0,
          country: country,
          userExpDate: userExpDate,
          role: role,
        };
        const newForeignPassenger = await User.create(data);
        if (newForeignPassenger) {
          let data = {
            userID: newForeignPassenger._id,
          };
          let stringData = JSON.stringify(data);

          QRCode.toDataURL(stringData, function (err, GenaratedQR) {
            if (err) {
              console.log("error occurred in QR code generation");
            } else {
              User.findByIdAndUpdate(
                newForeignPassenger._id,
                { smartCard: GenaratedQR },
                { new: true },
                (err, updatedUser) => {
                  if (err) {
                    res.status(400).send({
                      status: false,
                      message: "Foreign Passenger registration failed",
                    });
                  } else {
                    res.status(200).send({
                      status: true,
                      message: "Foreign Passenger registered successfully",
                    });
                  }
                }
              );
            }
          });
        } else {
          res.status(400).send({
            status: false,
            message: "Foreign Passenger registration failed",
          });
        }
      } else if (role == "Inspector") {
        const data = {
          firstName: firstName,
          lastName: lastName,
          fullName: firstName + " " + lastName,
          email: email,
          phoneNo: phoneNo,
          nic: nic,
          password: hashedPassword,
          route: route,
          busID: busID,
          role: role,
        };
        const newInspector = await User.create(data);
        if (newInspector) {
          res.status(200).send({
            status: true,
            message: "Inspector registered successfully",
          });
        } else {
          res.status(400).send({
            status: false,
            message: "Inspector registration failed",
          });
        }
      } else {
        return res.status(400).send({ status: false, message: "Invalid Role" });
      }
    } else {
      return res
        .status(400)
        .send({ status: false, message: "User already exists" });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

// User Login Function
const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const allForiegnPassengers = await User.find({ role: "ForeignPassenger" });
    allForiegnPassengers.forEach(async (passenger) => {
      const today = new Date();
      const expDate = new Date(passenger.userExpDate);
      if (expDate < today) {
        await User.findByIdAndUpdate(
          passenger._id,
          { accountStatus: "Expired" },
          { new: true }
        );
      }
    });

    const user = await User.findOne({ email: email });
    if (user) {
      if (user.accountStatus == "Expired") {
        return res
          .status(400)
          .send({ status: false, message: "Your account has been expired" });
      } else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "2d",
          });

          const tokens = {
            token: token,
          };

          await User.findByIdAndUpdate(
            user._id,
            { tokens: tokens },
            { new: true }
          );
          return res.status(200).send({
            status: true,
            message: "Login Success",
            token: token,
            role: user.role,
          });
        } else {
          return res
            .status(400)
            .send({ status: false, message: "Invalid Password" });
        }
      }
    } else {
      return res.status(400).send({ status: false, message: "User not found" });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

//User Logout Function
const UserLogout = async (req, res) => {
  try {
    req.User.tokens = req.User.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.User.save();

    return res.status(200).send({
      success: true,
      message: "User Logout Successful",
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

//User Profile details get using token
const UserProfile = async (req, res) => {
  try {
    const User = req.User;

    return res.status(200).send({ status: true, user: User });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const GetOneUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const userDetails = await User.findById(userId);

    if (userDetails) {
      return res.status(200).send({ status: true, user: userDetails });
    } else {
      return res.status(400).send({ status: false, message: "User not found" });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const userId = req.User._id;
    const { firstName, lastName, phoneNo, nic, passportNo, country, route } =
      req.body;

    const user = await User.findById(userId);

    if (user) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + " " + lastName,
        phoneNo: phoneNo,
        nic: nic,
        passportNo: passportNo,
        country: country,
      };

      const updatedUser = await User.findByIdAndUpdate(userId, data);

      if (updatedUser) {
        return res.status(200).send({
          status: true,
          message: "User updated successfully",
        });
      } else {
        return res.status(400).send({
          status: false,
          message: "User update failed",
        });
      }
    } else {
      return res.status(400).send({ status: false, message: "User not found" });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const DeleteUserProfile = async (req, res) => {
  try {
    const userId = req.User._id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      return res.status(200).send({
        status: true,
        message: "User deleted successfully",
      });
    } else {
      return res.status(400).send({
        status: false,
        message: "User delete failed",
      });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const GetAllPassengers = async (req, res) => {
  try {
    const allPassengers = await User.find({
      $or: [{ role: "LocalPassenger" }, { role: "ForeignPassenger" }],
    });

    if (allPassengers) {
      return res.status(200).send({ status: true, users: allPassengers });
    } else {
      return res.status(400).send({ status: false, message: "No users found" });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const GetAllInspector = async (req, res) => {
  try {
    const allInspectors = await User.find({ role: "Inspector" });

    if (allInspectors) {
      return res.status(200).send({ status: true, users: allInspectors });
    } else {
      return res
        .status(400)
        .send({ status: false, message: "No inspector found" });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const DeleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      return res.status(200).send({
        status: true,
        message: "User deleted successfully",
      });
    } else {
      return res.status(400).send({
        status: false,
        message: "User delete failed",
      });
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};
module.exports = {
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
};
