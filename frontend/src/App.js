import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./components/Layout/LoadingPage";
import AdminLogin from "./components/AdminLogin";
import AddBus from "./components/AddBus";
import BusDetails from "./components/BusDetails";
import BusUpdate from "./components/BusUpdate";
import AddBusRoutes from "./components/busRoute/addBusRoutes";
import BusRouteDetails from "./components/busRoute/getBusRoutes";
import InspectorSignUp from "./components/InspectorSignUp";
import UpdateBusRoutes from "./components/busRoute/UpdateBusRoutes";
import Checkroutes from "./components/Checkroutes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/addbus" element={<AddBus />} />
          <Route path="/busDetails" element={<BusDetails />} />
          <Route path="/updatebus/:busNumberPlate" element={<BusUpdate />} />
          <Route path="/busRoutes" element={<BusRouteDetails />} />
          <Route path="/inspectorsignup" element={<InspectorSignUp/>} />
          <Route path="/updatebusRoutes/:id" element={<UpdateBusRoutes/>} />
          <Route path="/busRoutes/:busNumberPlate" element={<AddBusRoutes />} />
          <Route path="/busRoutes" element={<BusRouteDetails />} />
          <Route path="/inspectorsignup" element={<InspectorSignUp />} />
          <Route path="/checkroutes/:id" element={<Checkroutes/>} />
        </Routes>
      </Router>
    );
  }
}
