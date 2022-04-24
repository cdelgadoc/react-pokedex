import React from "react";
import { Link } from 'react-router-dom';

import "./poke-card.css";

const PokeCard = (props) => (
  <div className="card-container">
    <Link to={`/pokemon/${props.pokemon.id}`}>
      <img alt="pokemon"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pokemon.idImage}.png`}/>
    </Link>
    <h4 className="pokename-card">{props.pokemon.name}</h4>
  </div>
);

export default PokeCard;
