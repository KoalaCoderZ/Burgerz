import React, { Component } from "react";

class ItemCard extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="http://placehold.it/400x80"
          alt="Card image cap"
        />
        <div className="card-header">
          <h2>Item Name</h2>
        </div>
        <div className="card-body">
          <p>Item Description</p>
        </div>
      </div>
    );
  }
}

export default ItemCard;
