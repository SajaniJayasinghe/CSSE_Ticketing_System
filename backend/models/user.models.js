// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const config = require('config');

// const UserSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required: true,
//     },

//     username:{
//         type: String,
//         required: true,
//     },

//     nic:{
//         type: String,
//         required: true,
//     },

//     phoneNumber:{
//         type: String,
//         required: true,
//     },

//     myplan:{
//         type: String,
//         required: true,
//     },

//     password: {
//         type: String,
//         required: true,
//       },
//       tokens: [
//         {
//           token: {
//             type: String,
//             required: true,
//           },
//         },
//       ],
// });

// // @Action - encrypt the password
// UserSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       next();
//     }
//     const salt = await bcrypt.genSalt(8);
//     this.password = await bcrypt.hash(this.password, salt);
//   });

// // @Action - Get auth token
// UserSchema.methods.generateAuthToken = async function () {
//     const User = this;
//     const token = jwt.sign({ _id: User._id }, "jwtSecret");
//     User.tokens = User.tokens.concat({ token });
//     await User.save();
//     return token;
//   };

// // @Action - Find staff by credentials
// UserSchema.statics.findByCredentials = async (username, password) => {
//     const User1 = await user.findOne({ username });
//     if (!User1) {
//       throw new Error("Please enter authorized UserName");
//     }
//     const isMatch = await bcrypt.compare(password, User1.password);
//     if (!isMatch) {
//       throw new Error("Password is not matched");
//     }
//     return User1;
//   };

// const user = mongoose.model("user", UserSchema);
// module.exports = user;

const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNo: {
      type: String,
      trim: true,
    },
    nic: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    //foreigner
    passportNo: {
      type: String,
      trim: true,
    },
    //foreigner
    country: {
      type: String,
    },
    //local n foreigner
    smartCard: {
      type: String,
    },
    //local n foreigner
    totalCredit: {
      type: Number,
    },
    //foreigner
    userExpDate: {
      type: Date,
    },
    //inspector
    route: {
      type: Number,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    accountStatus: {
      type: String,
      default: "Active",
      required: true,
    },
    //inspector
    busNumber: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: "pending",
    },

    tokens: [{ type: Object }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
