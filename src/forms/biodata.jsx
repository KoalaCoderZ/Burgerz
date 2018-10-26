import React, { Component } from "react";

class Biodata extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-sm-12 col-md-5 col-lg-5">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="FirstName"
              id="FirstName"
            />
          </div>
        </div>

        <div className="col-sm-12 col-md-5 col-lg-5">
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="LastName"
              id="LastName"
            />
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              name="Address"
              id="Address"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Biodata;
