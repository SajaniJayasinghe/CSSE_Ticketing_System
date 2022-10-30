const Bus = require("../models/bus.models");

//ad new buses
const BusRegister = async (req, res) => {
  let newBus = new Bus(req.body);

  const isBusCheck = await Bus.find({
    busID: newBus.busID,
  });

  if (isBusCheck.length == 0) {
    newBus.save((err)=>{
      if(err){
        return res.status(400).json({
          error :err ,
        });
      }
      return res.status(200).json({
        success: "New Bus Added Successfully !!",
        })
    });
  } else {
    return res.status(200).send({
      message: "Bus already registered",
    });
  }
};

//get all added buses
const GetAllBuses = async (req, res) => {
  Bus.find().exec((err, bus) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingBus: bus,
    });
  });
};

//get specific bus
const GetOneBus = async (req, res) => {
  let busID = req.params.busID;
  Bus.findById(busID, (err, bus) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingBus: bus,
    });
  });
};

//update bus
const UpdateBus = (req, res) => {
  Bus.findByIdAndUpdate(
    req.params.busID,
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

//delete Bus
const DeleteBus = (req, res) => {
  Bus.findByIdAndRemove(req.params.busID).exec((err, deletebus) => {
    if (err)
      return res.status(400).json({
        message: "Deletion Unsuccessfull",
        err,
      });

    return res.json({
      message: "Deletion Successfull",
      deletebus,
    });
  });
};

module.exports = {
  BusRegister,
  GetAllBuses,
  GetOneBus,
  UpdateBus,
  DeleteBus,
};
