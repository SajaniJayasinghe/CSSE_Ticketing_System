const mongoose = require("mongoose");

const busRouteSchema = new mongoose.Schema({
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

const busRoute = mongoose.model("busRoute", busRouteSchema);
module.exports = busRoute;
