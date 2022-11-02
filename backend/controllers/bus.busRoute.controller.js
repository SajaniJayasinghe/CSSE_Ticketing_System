const busRoute = require("../models/bus.busRoute.models");
const Bus = require("../models/bus.models");

//add new buse route
const addBusRoute = async (req, res) => {
  let newBusRoute = new busRoute(req.body);
  const busNumber = await busRoute.find({
    busNumber: newBusRoute.busNumber,
  });

  if (busNumber.length == 0) {
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

//get all added buse routes
const GetAllBuseRoutes = async (req, res) => {
  busRoute.find().exec((err, bus) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingBusRoutes: bus,
    });
  });
};

//get one bus route
const GetOneBusRoute = async (req, res) => {
  let id = req.params.id;
  busRoute.findById(id, (err, busRoutes) => {
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

// //update bus route
const UpdateBusRoute = (req, res) => {
  busRoute.findByIdAndUpdate(
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

// //delete bus rotes
const DeleteBusRoutes = (req, res) => {
  busRoute.findByIdAndRemove(req.params.id).exec((err, deletebusroutes) => {
    if (err)
      return res.status(400).json({
        message: "Deletion Unsuccessfull",
        err,
      });

    return res.json({
      message: "Deletion Successfull",
      deletebusroutes,
    });
  });
};

module.exports = {
  addBusRoute,
  GetAllBuseRoutes,
  GetOneBusRoute,
  UpdateBusRoute,
  DeleteBusRoutes,
};
