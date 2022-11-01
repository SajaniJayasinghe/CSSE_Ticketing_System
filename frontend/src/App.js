import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./components/Layout/LoadingPage";
import AdminLogin from "./components/AdminLogin";
import AddBus from "./components/AddBus";
import BusDetails from "./components/BusDetails";
import BusUpdate from "./components/BusUpdate";
import Apps from "./components/busRoute/addBusRoutes";
import BusRouteDetails from "./components/busRoute/getBusRoutes";
import AdminDashboardNavbar from "./components/Layout/AdminDashboardNavbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboardNavbar />} />
          <Route path="/addbus" element={<AddBus />} />
          <Route path="/busDetails" element={<BusDetails />} />
          <Route path="/updatebus/:busNumberPlate" element={<BusUpdate />} />
          <Route path="/busRoutes/:id" element={<Apps />} />
          <Route path="/busRoutes" element={<BusRouteDetails />} />
        </Routes>
      </Router>
    );
  }
}
