import React from "react";

const Infomon = (props) => (
  <div className="element-container">
    <div className="title">{props.pokemon.idImage} - {props.pokemon.name}</div>
    <img alt="pokemon" className="avatar" 
      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pokemon.idImage}.png`}/>
  </div>
);

export default Infomon;


