import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper" style={{backgroundColor: "Green"}}>
            <a className="brand-logo">
              RANCE TASK 3
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a >Home</a>
              </li>
              <li>
                <a >Contacts</a>
              </li>
              <li>
                <a >About us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
