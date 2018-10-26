import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./Routes/About";
import Features from "./Routes/Features";
import Menu from "./Routes/Menu";
import Error from "./components/error";

// eslint-disable-next-line
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <div style={{ height: "100%" }}>
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route exact path="/about" component={About} />
              <Route exact path="/features" component={Features} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routes;
