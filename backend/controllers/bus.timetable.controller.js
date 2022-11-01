const timetable = require("../models/bus.timetable.models");

//add new buse route
const addBusRoute = async (req, res) => {
  let newBusRoute = new timetable(req.body);

  const busID = await timetable.find({ busID: newBusRoute.busID });

  if (busID.length == 0) {
    newBusRoute.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "New Bus Route Added Successfully !!",
      });
    });
  } else {
    return res.status(200).send({
      message: "Adding Bus Route Unsuccessful",
    });
  }
};

//get all added bus routes
const GetAllBusRoutes = async (req, res) => {
  timetable.find().exec((err, busRoutes) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingBusRoutes: busRoutes,
    });
  });
};

//update bus route
const UpdateBusRoute = (req, res) => {
  timetable.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).send({
        success: "Bus Details Updated Successfully",
      });
    }
  );
};

//get one bus route
const GetOneBusRoute = async (req, res) => {
  let id = req.params.id;
  timetable.findById(id, (err, busRoute) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingBusRoute: busRoute,
    });
  });
};

module.exports = {
  addBusRoute,
  GetAllBusRoutes,
  UpdateBusRoute,
  GetOneBusRoute,
};
