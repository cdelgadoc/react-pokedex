//import { Button } from "@material-ui/core";
import React from "react";

const PokeEvol = (props) => (
  <div>
    <a onClick={() => {window.location.href=`/pokemon/${props.pokemon.id}`}} href>
      <img alt="pokemon" className="avatar-evolution"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pokemon.idImage}.png`}/>
      <h2 className="pokename ">{props.pokemon.idImage} - {props.pokemon.name}</h2>
    </a>
  </div>
);

export default PokeEvol;