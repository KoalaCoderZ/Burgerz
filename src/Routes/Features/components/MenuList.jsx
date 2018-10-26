import React from "react";

const MenuList = (props) => {
    return (
      <div className="card">
        <img
          className="card-img-top img img-responsive"
          src={props.pic}
          alt={props.name}
          width="460" 
          height="345"
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

export default MenuList;
