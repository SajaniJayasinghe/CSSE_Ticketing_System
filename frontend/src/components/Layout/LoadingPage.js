import React, { Component } from "react";
import AdminNavBar from "../Layout/AdminNavBar";
import Footer from "./Footer";


export default class LoadingPage extends Component {
  render() {
    return (
      <div>
        <AdminNavBar />
        <div className="container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" >
              <div>
                <img
                    style={{
                        marginTop:5,
                        marginLeft:-68,
                        height:500,
                    }}
                  src="https://trucknbus.hyundai.com/hydrogen/ko/img/sub/elec-city-fuel-cell/img_elec_city_fuel_cell_3_6.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <Footer/>
      </div>
    );
  }
}
