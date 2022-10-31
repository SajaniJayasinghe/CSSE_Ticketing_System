import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdminDashboardNavbar from "./Layout/AdminDashboardNavbar";
import Footer from "./Layout/Footer";
import Button from "@material-ui/core/Button";

export default function BusUpdate() {
  const [busNumber, setbusNumber] = useState("");
  const [length, setlength] = useState("");
  const [departure, setdeparture] = useState("");
  const [destination, setdestination] = useState("");
  const [route, setroute] = useState("");
  const [seats, setseats] = useState("");

  const params = useParams();
  const busNumberPlate = params.busNumberPlate;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/bus/getonebus/${busNumberPlate}`)
      .then((res) => {
        if (res.data) {
          setbusNumber(res.data.existingBus.busNumber);
          setlength(res.data.existingBus.length);
          setdeparture(res.data.existingBus.departure);
          setdestination(res.data.existingBus.destination);
          setroute(res.data.existingBus.route);
          setseats(res.data.existingBus.seats);
        }
        console.log(res.data);
      });
  }, []);

  const onUpdate = (e) => {
    e.preventDefault();
    const updateBus = {
      busNumber,
      length,
      departure,
      destination,
      route,
      seats,
    };
    axios
      .put(
        `http://localhost:8080/api/bus/updatebus/${busNumberPlate}`,
        updateBus
      )
      .then((res) => {
        if (res.data) {
          alert("Update Successfully....!");
          window.location.href = "/busDetails";
        } else {
          alert("Update Unsuccessfelly...!");
        }
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
            height: 500,
            backgroundSize: "1000px ",
          }}
        >
          <div class="card-body">
            <form action="" method="post" name="form" onSubmit={onUpdate}>
              <div style={{ display: "flex" }}>
                <div class="row g-0" style={{ flex: 1 }}>
                  <img
                    src="https://trucknbus.hyundai.com/global/en/upload/carmng/KV00000070/elec-city-key-visual10-m.jpg"
                    style={{
                      objectFit: "cover",
                      height: 500,
                      marginLeft: -30,
                      marginTop: -16,
                    }}
                  ></img>
                </div>

                <div class="col-xl-10" style={{ flex: 1 }}>
                  <div class="form-outline mb-2">
                    <h3
                      style={{
                        fontFamily: "times new roman",
                        fontSize: 36,
                        marginLeft: 50,
                        color: "#0C090A",
                        marginTop: 15,
                      }}
                    >
                      <b>
                        <u>UPDATE&nbsp; BUS DETAILS</u>
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
                        1. Bus Number
                      </div>
                      <input
                        type="text"
                        value={busNumber}
                        class="form-control"
                        name="busNumber"
                        onChange={(e) => {
                          setbusNumber(e.target.value);
                        }}
                        readOnly
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
                        2. Length (KM/M)
                      </div>
                      <input
                        type="text"
                        value={length}
                        class="form-control"
                        name="length"
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
                        3. Departure
                      </div>
                      <input
                        type="text"
                        value={departure}
                        class="form-control"
                        name="departure"
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
                        4. Destination
                      </div>
                      <input
                        type="text"
                        value={destination}
                        class="form-control"
                        name="destination"
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
                        5. Routes Number
                      </div>
                      <input
                        type="number"
                        value={route}
                        class="form-control"
                        name="route"
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
                        6. Seats
                      </div>
                      <select
                        className="form-control"
                        name="seat"
                        value={seats}
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
                      UPDATE
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      variant="contained"
                      href="/busDetails"
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
