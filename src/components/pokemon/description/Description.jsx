import React from "react";

const Description = (props) => (
  <div className="element-container">
    <h3>DESCRIPTION</h3>
    <p className="text-description"> {props.description}</p>
    <h3>WEIGHT</h3>
    <p className="text-description">{props.weight/10} Kg</p> 
    <h3>HEIGHT</h3>
    <p className="text-description">{props.height/10} Mts</p>
  </div>
);

export default Description;
