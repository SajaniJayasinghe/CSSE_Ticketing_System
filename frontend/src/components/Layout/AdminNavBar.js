import React, { Component } from "react";

export default class AdminNavBar extends Component {
  render() {
    return (
      <div>
        <img
          style={{ marginLeft: 25 }}
          src="https://res.cloudinary.com/nibmsa/image/upload/v1666932800/Screenshot_2022-10-28_at_10.21.05-removebg-preview_zronda.png"
          width="180px"
          height="120"
          className="d-inline-block align-top"
          alt=""
        ></img>
         <nav
          class="navbar navbar-expand-lg "
          style={{ backgroundColor: "#DAE7F8" }}
        >
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 100,
                      marginRight: 50,
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
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>Bus </b>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="https://www.coursera.org/?irclickid=z5lQ0KztYxyNUTlwSBRZ803HUkDQSGRp7XFO0E0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=3030402&utm_content=b2c"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>Resourses</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="/readblogs"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>Blogs</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/howtowork"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>How to Work</b>
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://mail.google.com/"
                    style={{
                      color: "black",
                      fontFamily: "times new roman",
                      fontSize: 20,
                      marginLeft: 50,
                      marginRight: 50,
                    }}
                  >
                    <b>Emails</b>
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
