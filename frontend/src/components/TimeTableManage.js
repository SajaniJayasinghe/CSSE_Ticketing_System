import React, { Component } from 'react';
import axios from "axios";
export default class TimeTableManage extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          bus: [],
          busRoutes:[]
        };
      }

      componentDidMount() {
        this.retrieveBus();
      }
      retrieveBus() {
        axios.get("http://localhost:8080/api/bus/getallbus").then((res) => {
          if (res.data.success) {
            this.setState({
              bus: res.data.existingBus,
            });
            console.log(this.state.bus);
          }
        });
      }
    render() {
    return (
      <div>
         <table class="table">
              <thead>
                <tr bgcolor="#B0E0E6">
                  <th>
                    <font color="black">No</font>
                  </th>
                  <th>
                    <font color="black">Bus Number</font>
                  </th>
</tr>
              </thead>
              <tbody>
              {this.state.bus.map((bus, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{bus.busNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
    )
  }
}
