import React, { Component } from "react";
import NavBar from "./pages/navbar";
import ItemCard from "./pages/card";
import Biodata from "./forms/biodata";
import Divider from "./pages/divider";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, name: "burgers1" },
      { id: 2, value: 0, name: "burgers2" },
      { id: 3, value: 0, name: "burgers3" },
      { id: 4, value: 0, name: "burgers4" }
    ]
  };
  render() {
    console.log(this.state.name);
    return (
      <div className="container">
        <NavBar />
        <div className="row">
          {this.state.counters.map(counter => (
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              style={{ marginBottom: 20 }}
            >
              <ItemCard
                counters={this.state.counters}
                names={this.state.name}
              />
            </div>
          ))}
        </div>
        <Divider />
        <div className="row">
          <Biodata />
        </div>
      </div>
    );
  }
}

export default App;
