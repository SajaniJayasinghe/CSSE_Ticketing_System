import React, { Component } from "react";
import axios from "axios";
import AdminDashboardNavbar from "../Layout/AdminDashboardNavbar";
import Footer from "../Layout/Footer";
import Button from "@material-ui/core/Button";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

export default class BusRouteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busRoutes: [],
    };
  }
  componentDidMount() {
    this.retrieveBus();
  }
  retrieveBus() {
    axios
      .get("http://localhost:8080/api/busRoute/getAllBusRoutes")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            busRoutes: res.data.existingBusRoutes,
          });
          console.log("busRoutes", this.state.busRoutes);
        }
      });
  }

  render() {
    return (
      <div>
        <AdminDashboardNavbar />
        <br />
        <div className="container">
          <div align="right">
            <Button
              variant="contained"
              style={{
                background: "#7BCCB5",
                width: 10 + "%",
                color: "black",
                borderRadius: 20,
              }}
              href="/addbusRoute"
              disableElevation
              type="submit"
            >
              <DirectionsBusIcon /> &nbsp; ADD BUS ROUTE
            </Button>
            &nbsp;
          </div>
          <div align="center">
            <h3 style={{ fontFamily: "times new roman", fontSize: "45px" }}>
              <u>
                <b>Bus Routes</b>
              </u>
            </h3>
            <br></br>

            <table class="table">
              <thead>
                <tr bgcolor="#B0E0E6">
                  <th>
                    <font color="black">No</font>
                  </th>
                  <th>
                    <font color="black">Bus Number</font>
                  </th>
                  <th>
                    <font color="black">Departure</font>
                  </th>
                  <th>
                    <font color="black">Destination</font>
                  </th>
                  <th>
                    <font color="black">Route Number</font>
                  </th>
                  <th>
                    <font color="black">Bus Stops</font>
                  </th>
                  <th>
                    <font color="black">Action</font>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.busRoutes.map((busRoutes, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{busRoutes.busNumber}</td>
                    <td>{busRoutes.departure}</td>
                    <td>{busRoutes.destination}</td>
                    <td>{busRoutes.route}</td>
                    <td>{busRoutes.busstops}</td>

                    <td>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        size="small"
                        href={`/busRoutes/${busRoutes._id}`}
                      >
                        <EditIcon
                          fontSize="small"
                          style={{ color: "#151B54" }}
                        />
                      </IconButton>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
