const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema(
  {
    busNumber: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    departure: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: false,
    },
    route: {
      type: Number,
      trim: true,
    },
    seats: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const bus = mongoose.model("bus", BusSchema);
module.exports = bus;
