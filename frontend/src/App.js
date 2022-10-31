import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./components/Layout/LoadingPage";
import AdminLogin from "./components/AdminLogin";

export default class App extends Component {
    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/" element ={<LoadingPage/>}/>
                    <Route path="/adminlogin" element ={<AdminLogin/>}/>
                </Routes>
            </Router>
        )
    }
}