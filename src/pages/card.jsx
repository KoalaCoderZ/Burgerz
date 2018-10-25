import React from "react";

const ItemCard = (props) => {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={props.pic}
          alt="Card image cap"
        />
        <div className="card-header">
          <h2>{props.name}</h2>
        </div>
        <div className="card-body">
          <p>{props.desc}</p>
        </div>
      </div>
    );
}

export default ItemCard;
