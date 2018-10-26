import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Menu from "./Routes/Menu";
import Features from "./Routes/Features";
import Error from "./components/error";

// eslint-disable-next-line
class Routes extends React.Component {
  render() {
    return (
      <Router>
          <div className="container">   
            <NavBar />
             <div style={{ height: '100%' }}>
                <Switch>
                    <Route exact path="/menu" component={Menu} />
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
