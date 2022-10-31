const express = require("express");
const BusRouter = express.Router();

const {
    BusRegister,
    GetAllBuses,
    GetOneBus,
    UpdateBus,
    DeleteBus
} = require("../controllers/bus.controller");

BusRouter.post("/addbus",BusRegister);
BusRouter.get("/getallbus",GetAllBuses);
BusRouter.get("/getonebus/:busNumberPlate",GetOneBus);
BusRouter.put("/updatebus/:busNumberPlate",UpdateBus);
BusRouter.delete("/deletebus/:busNumberPlate",DeleteBus);

module.exports = BusRouter;