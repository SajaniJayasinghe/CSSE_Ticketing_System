import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./components/Layout/LoadingPage";
import AdminLogin from "./components/AdminLogin";
import AddBus from "./components/AddBus";
import BusDetails from "./components/BusDetails";
import BusUpdate from "./components/BusUpdate";
import TimeTableManage from "./components/TimeTableManage";
import InspectorSignUp from "./components/InspectorSignUp";

export default class App extends Component {
    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/" element ={<LoadingPage/>}/>
                    <Route path="/adminlogin" element ={<AdminLogin/>}/>
                    <Route path="/addbus" element ={<AddBus/>}/>
                    <Route path="/busDetails" element ={<BusDetails/>}/>
                    <Route path="/updatebus/:busNumberPlate" element ={<BusUpdate/>}/>
                    <Route path="/timetablemanage" element ={<TimeTableManage/>}/>
                    <Route path="/inspectorsignup" element ={<InspectorSignUp/>}/>
                </Routes>
            </Router>
        )
    }
}