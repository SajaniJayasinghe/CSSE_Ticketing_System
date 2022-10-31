import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class AdminNavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Button
                    href="/adminlogin"
                    style={{
                      marginTop: 10,
                      marginLeft: 1200,
                      marginRight: 20,
                      color: "black",
                      height: 75 + "%",
                      width: 9 + "%",
                      background: "#3B9C9C",
                      borderRadius: 20,
                    }}
                  >
                    Sign In
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <img
          style={{ marginLeft: 25, marginTop: -60 }}
          src="https://res.cloudinary.com/nibmsa/image/upload/v1667199794/Screenshot_2022-10-31_at_12.32.06-removebg-preview_y9b5er.png"
          width="150px"
          height="110"
          className="d-inline-block align-top"
          alt=""
        ></img>
        <nav
          class="navbar navbar-expand-lg "
          style={{ backgroundColor: "#033E3E" }}
        >
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <img
                    style={{ marginLeft: -50 }}
                    src="https://res.cloudinary.com/nibmsa/image/upload/v1667199160/Screenshot_2022-10-31_at_12.21.28-removebg-preview_hf7bkn.png"
                    width="300px"
                    height="50"
                    className="d-inline-block align-top"
                    alt=""
                  ></img>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "white",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 400,
                      marginRight: 30,
                    }}
                  >
                    <b>Home</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "white",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 30,
                      marginRight: 30,
                    }}
                  >
                    <b>About</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "white",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 30,
                      marginRight: 30,
                    }}
                  >
                    <b>Contact</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "white",
                      fontFamily: "times new roman",
                      fontSize: 20,

                      marginRight: 30,
                    }}
                  >
                    <b>Routes</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "white",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 10,
                    }}
                  >
                    <b>Time Table</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
