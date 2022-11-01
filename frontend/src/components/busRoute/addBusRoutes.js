import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { useParams } from "react-router-dom";

import { MenuProps, useStyles, busStops } from "./addBusRoutes.utils";

function AddBusRoutes() {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [busNumber, setbusNumber] = useState("");
  const [inspectorName, setInspectorName] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [destinationTime, setDestinationTime] = useState("");
  const [departure, setdeparture] = useState("");
  const [destination, setdestination] = useState("");
  const [route, setroute] = useState("");
  const [length, setlength] = useState("");
  const [seats, setseats] = useState("");

  const params = useParams();
  const busNumberPlate = params.busNumberPlate;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/bus/getonebus/${busNumberPlate}`)
      .then((res) => {
        if (res.data) {
          setbusNumber(res.data.existingBus.busNumber);
          setdeparture(res.data.existingBus.departure);
          setdestination(res.data.existingBus.destination);
          setroute(res.data.existingBus.route);
          setlength(res.data.existingBus.length);
          setseats(res.data.existingBus.seats);
        }
        console.log(res.data);
      });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === busStops.length ? [] : busStops);
      return;
    }
    setSelected(value);
  };

  const sendData = async (e) => {
    e.preventDefault();

    let new_group = {
      busNumber: busNumber,
      route: route,
      departure: departure,
      destination: destination,
      busstops: selected,
      inspectorName: inspectorName,
      departureTime: departureTime,
      destinationTime: destinationTime,
    };

    axios
      .post("http://localhost:8080/api/busRoute/addBusRoute", new_group)
      .then(() => {
        alert("Adding bus route Success");
      })
      .catch((err) => {
        alert("Adding bus route unsuccess", err);
      });

    setSelected([""]);
    setDepartureTime("");
    setDestinationTime("");
    console.log(new_group);
  };

  return (
    <form action="" method="post" name="form" onSubmit={sendData}>
      <div>
        {" "}
        Bus Route
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
        <input
          type="text"
          value={departure}
          class="form-control"
          name="departure"
          onChange={(e) => {
            setdeparture(e.target.value);
          }}
          readOnly
        />
        <input
          type="text"
          value={departureTime}
          class="form-control"
          name="departureTime"
          onChange={(e) => {
            setdeparture(e.target.value);
          }}
        />
        <input
          type="text"
          value={destination}
          class="form-control"
          name="destination"
          onChange={(e) => {
            setdestination(e.target.value);
          }}
          readOnly
        />
        <input
          type="text"
          value={destinationTime}
          class="form-control"
          name="destinationTime"
          onChange={(e) => {
            setdestination(e.target.value);
          }}
        />
        <input
          type="text"
          value={route}
          class="form-control"
          name="route"
          onChange={(e) => {
            setroute(e.target.value);
          }}
          readOnly
        />
        <input
          type="text"
          value={inspectorName}
          class="form-control"
          name="route"
          onChange={(e) => {
            setInspectorName(e.target.value);
          }}
        />
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-select-label">Select Bus Route</InputLabel>
        <Select
          labelId="mutiple-select-label"
          multiple
          value={selected}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {busStops.map((option) => (
            <MenuItem key={option} value={option}>
              <ListItemIcon>
                <Checkbox checked={selected.indexOf(option) > -1} />
              </ListItemIcon>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div class="d-flex justify-content pt-3">
        <button type="submit" class="btn btn-primary btn-2 ">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddBusRoutes;
