import React, { Component } from "react";
import Menu from "./Routes/Menu";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
      </div>
    );
  }
}

export default App;
