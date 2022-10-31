const express = require("express");
const BusRouteRouter = express.Router();

const {
  addBusRoute,
  //   addInspector,
  GetAllBusRoutes,
  UpdateBusRoute,
  GetOneBusRoute,
} = require("../controllers/bus.timetable.controller");

BusRouteRouter.post("/addBusRoute", addBusRoute);
// BusRouteRouter.post("/addBusRoute/:id", addInspector);
BusRouteRouter.get("/getAllBusRoutes", GetAllBusRoutes);
BusRouteRouter.put("/updateBusRoute/:id", UpdateBusRoute);
BusRouteRouter.get("/getOneBusRoute/:id", GetOneBusRoute);

module.exports = BusRouteRouter;
