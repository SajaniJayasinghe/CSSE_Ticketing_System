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
BusRouter.get("/getonebus/:busID",GetOneBus);
BusRouter.put("/updatebus/:busID",UpdateBus);
BusRouter.delete("/deletebus/:busID",DeleteBus);

module.exports = BusRouter;