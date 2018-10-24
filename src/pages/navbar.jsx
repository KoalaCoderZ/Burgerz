import React, { Component } from "react";
import Header from "./header";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <b>B</b> for Burgerz
          </a>
        </nav>
        <Header />
      </div>
    );
  }
}

export default NavBar;
