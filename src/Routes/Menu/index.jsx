import React, { Component } from "react";
import MenuList from "./components/MenuList";
import { connect } from 'react-redux';
import { GET_DATA } from '../../actions/tableAction';
import "./Menu.css";

class Menu extends Component {

  componentDidMount(){
    const { GET_DATA } = this.props;
    GET_DATA()
  }

  render() {
    const { tableReducer: { data }} = this.props;
    return (
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
    );
  }
}

const mapStateToProps = ({ tableReducer }) => ({
  tableReducer
});

export default connect(mapStateToProps,{
  GET_DATA
})(Menu);
