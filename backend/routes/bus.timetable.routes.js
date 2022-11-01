const express = require("express");
const BusRouteRouter = express.Router();

const {
  addBusRoute,
  GetAllBuseRoutes,
  GetOneBusRoute,
  UpdateBusRoute,
  DeleteBusRoutes
} = require("../controllers/bus.timetable.controller");

BusRouteRouter.post("/addbusroutes", addBusRoute);
BusRouteRouter.get("/allbusroutes", GetAllBuseRoutes);
BusRouteRouter.get("/getonebusroutes/:id", GetOneBusRoute);
BusRouteRouter.put("/updatebusroutes/:id", UpdateBusRoute);
BusRouteRouter.delete("/deletebusroutes/:id", DeleteBusRoutes);


module.exports = BusRouteRouter;
