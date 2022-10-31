import React, { useState } from "react";
import axios from "axios";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";
import Footer from "./Layout/Footer";
import Button from "@material-ui/core/Button";

export default function AddBus() {
  const [busNumberPlate, setbusNumberPlate] = useState("");
  const [length, setlength] = useState("");
  const [departure, setdeparture] = useState("");
  const [destination, setdestination] = useState("");
  const [route, setroute] = useState("");
  const [seats, setseats] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    let data = {
      busNumberPlate: busNumberPlate,
      length: length,
      departure: departure,
      destination: destination,
      route: route,
      seats: seats,
    };

    axios
      .post("http://localhost:8080/api/bus/addbus", data)
      .then(() => {
        alert("Bus Added Successfully");
        window.location.href = "/admindashboard";
        console.log(data);
      })
      .catch((err) => {
        alert("Bus already registered");
      });
  };
  return (
    <div>
      <AdminDashboardNavbar />
      <br />
      <br />
      <div class="row d-flex align-items-center justify-content-center">
        <div
          style={{
            width: 1000,
            background: "#B0E0E6",
            height: 600,
            backgroundSize: "1000px ",
          }}
        >
          <div class="card-body">
            <form action="" method="post" name="form" onSubmit={sendData}>
              <div style={{ display: "flex" }}>
                <div class="row g-0" style={{ flex: 1 }}>
                  <img
                    src="https://trucknbus.hyundai.com/global/en/upload/carmng/KV00000070/elec-city-key-visual10-m.jpg"
                    style={{
                      objectFit: "cover",
                      height: 600,
                      marginLeft: -30,
                      marginTop: -16,
                    }}
                  ></img>
                  <br />
                  <br />
                </div>

                <div class="col-xl-10" style={{ flex: 1 }}>
                  <div class="form-outline mb-2">
                    <h3
                      style={{
                        fontFamily: "times new roman",
                        fontSize: 36,
                        marginLeft: 90,
                        color: "#0C090A",
                      }}
                    >
                      <b>
                        <br />
                        <u>ADD&nbsp;NEW BUS</u>
                      </b>
                    </h3>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "165px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        1. Bus Number :
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        name="busNumberPlate"
                        placeholder="Enter Bus Number"
                        onChange={(e) => {
                          setbusNumberPlate(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 10,
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "165px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        2. Length :
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        name="length"
                        placeholder="Enter Length"
                        onChange={(e) => {
                          setlength(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 10,
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "165px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        3. Departure:
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        name="departure"
                        placeholder="Enter Departure"
                        onChange={(e) => {
                          setdeparture(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 10,
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "165px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        4. Destination :
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        name="destination"
                        placeholder="Enter Destination"
                        onChange={(e) => {
                          setdestination(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 10,
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "165px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        5. Routes Number :
                      </div>
                      <input
                        type="number"
                        class="form-control"
                        name="route"
                        placeholder="Enter Bus Route Number"
                        onChange={(e) => {
                          setroute(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 10,
                        color: "#0C090A",
                      }}
                    >
                      <div
                        style={{
                          minWidth: "165px",
                          maxWidth: "100px",
                          fontFamily: "times new roman",
                          fontSize: 18,
                        }}
                      >
                        6. Seats :
                      </div>
                      <select
                        className="form-control"
                        name="seat"
                        class="form-control"
                        onChange={(e) => setseats(e.target.value)}
                        required
                      >
                        <option value="">Select Seat</option>
                        <option value="18">18</option>
                        <option value="20"> 20</option>
                        <option value="25"> 25</option>
                        <option value="47">47</option>
                        <option value="55"> 55</option>
                        <option value="60">60</option>
                      </select>
                    </div>
                    <br />
                    <Button
                      variant="contained"
                      className="w-10"
                      style={{
                        background: "#033E3E",
                        width: 23 + "%",
                        color: "white",
                        borderRadius: 20,
                        marginLeft: 200,
                      }}
                      disableElevation
                      type="submit"
                    >
                      CREATE
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      variant="contained"
                      href="/admindashboard"
                      className="w-10"
                      style={{
                        background: "#033E3E",
                        width: 23 + "%",
                        color: "white",
                        borderRadius: 20,
                      }}
                      disableElevation
                      type="submit"
                    >
                      CANCEL
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
