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
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item">
                    
                 </li>
                 </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
