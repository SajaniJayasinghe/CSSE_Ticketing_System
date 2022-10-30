import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLogin from "./components/AdminLogin";

export default class App extends Component {
    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/" element ={<AdminLogin/>}/>
                </Routes>
            </Router>
        )
    }
}