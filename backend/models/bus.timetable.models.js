const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true,
  },
  route: {
    type: Number,
    trim: true,
  },
  departure: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  inspectorName: {
    type: String,
    required: false,
    trim: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  destinationTime: {
    type: String,
    required: true,
  },
  busstops: [{ type: String, trim: true }],
});

const timetable = mongoose.model("timetable", timetableSchema);
module.exports = timetable;
