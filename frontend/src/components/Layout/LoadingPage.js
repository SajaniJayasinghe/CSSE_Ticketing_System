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
            <div class="col">
              <div>
                <img
                  style={{
                    marginTop: 5,
                    marginLeft: -68,
                    height: 500,
                  }}
                  src="https://trucknbus.hyundai.com/hydrogen/ko/img/sub/elec-city-fuel-cell/img_elec_city_fuel_cell_3_6.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            class="col"
            style={{
              width: "50%",
              color: "black",
              marginLeft: 4,
              marginRight: 5,
            }}
          >
            <div class="shadow h-40" id="cardcol1">
              <div
                class="card-body"
                style={{
                  background: "#5F9EA0",
                  textAlign: "justify",
                  width: 950,
                  marginTop: 10,
                }}
              >
                <h5
                  class="card-title"
                  style={{
                    marginLeft: 60,
                    align: "left",
                    fontFamily: "revert",
                    fontSize: "35px",
                    color: "black",
                    marginTop:10
                  }}
                >
                  <b><u>Know Few Words About Smartline.lk</u></b>
                </h5>
                <br />
                <p
                  style={{
                    marginLeft: 60,
                    marginRight: 40,
                    color:"black",
                    textAlign: "justify",
                  }}
                >
                  <b>Through this service long distance travelers could be able to
                  book any bus seats for anywhere in Sri Lanka at one place</b>
                </p>
                <p
                  style={{
                    marginLeft: 60,
                    marginRight: 40,
                    color:"black",
                    textAlign: "justify",
                  
                  }}
                >
                  <b>
                  Presently most of the passenger is unable to make their
                  itineraries because of the un-schedule times of departure from
                  the boarding point by the private bus operators. We have made
                  a system to obtain the details of the bus operating route and
                  the time of departure. So that the online booking personal
                  well informed of the exact bus number, route, time of
                  departure, fare of the particular route. All routes and the
                  destinations will be notified in our platform of the booking
                  service and monitoring the passenger boarding points to be
                  success the operation.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div class="col" style={{ width: "32rem", marginLeft: 200,marginTop:30 }}>
            <div class="card-body">
              <img
                src="https://newsexpressin.com/wp-content/uploads/2022/05/houston-press-release-1494x954-1.jpeg"
                height="340px"
                class="card-img-top"
              />
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            class="col"
            style={{
              width: "99.2%",
              color: "black",
              marginLeft: 5,
            }}
          >
            <div class="shadow h-40" id="cardcol1">
              <div
                style={{
                  background: "#ffff",
                  textAlign: "justify",
                  marginTop: -20,
                }}
              >
                <div class="col">
                  <img
                    style={{ width: "45rem", marginLeft: -14.8, marginRight: 5.8 }}
                    src="https://wallpaperaccess.com/full/1628626.jpg"
                    height="340px"
                    class="card-img-top"
                  />
                  <img
                    style={{ width: "43rem", marginLeft: -3.5, marginRight: 2.6 }}
                    src="https://haber.magazinulasim.com/wp-content/uploads/2022/07/Setra-Yeni-Makyajli-Setra-ComfortClass-Setra-Daimler-Buses-Otobusler.jpg"
                    height="340px"
                    class="card-img-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div><br/>
        <Footer />
      </div>
    );
  }
}
