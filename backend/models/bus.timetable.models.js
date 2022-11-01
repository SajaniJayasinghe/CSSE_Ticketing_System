const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  busID: {
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
  busstops: [
    {
      busStopName: { type: String, trim: true },
      stoptime: { type: String, trim: true },
    },
  ],
});
const timetable = mongoose.model("timetable", timetableSchema);
module.exports = timetable;
