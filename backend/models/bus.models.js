const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  busName: {
    type: String,
    required: true,
  },
  busID: {
    type: String,
    required: true,
  },
  date: {
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
    required: true,
  },
  busFee: {
    type: String,
    required: true,
  },
  busThumbnail: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  sheets:{
    type: String,
    required: true,
  }
});
const bus = mongoose.model("bus", BusSchema);
module.exports = bus;
