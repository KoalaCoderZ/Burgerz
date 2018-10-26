import React, { Component } from "react";
<<<<<<< HEAD
import NavBar from "./pages/navbar";
import ItemCard from "./pages/card";
import Biodata from "./forms/biodata";
import Divider from "./pages/divider";
=======
import NavBar from "./components/NavBar";
import MenuList from "./components/MenuList";
import { connect } from 'react-redux';
import { GET_DATA } from './actions/tableAction';
>>>>>>> 9af9f9bba1a129bb10539f80fdde232a571d1f2e
import "./App.css";

class App extends Component {

  componentDidMount(){
    const { GET_DATA } = this.props;
    GET_DATA()
  }

  render() {
    const { tableReducer: { data }} = this.props;
    return (
      <div className="container">
        <NavBar />
        <div className="row">
          {data.map(item => (
            <div
              className="col-sm-12 col-md-6 col-lg-6"
              style={{ marginBottom: 20 }}
              key={`${item.id+1}`}
            >
              <MenuList
                pic={item.pic}
                name={item.name}
                desc={item.description}
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

const mapStateToProps = ({ tableReducer }) => ({
  tableReducer
});

export default connect(mapStateToProps,{
  GET_DATA
})(App);
