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
      required: false,
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
