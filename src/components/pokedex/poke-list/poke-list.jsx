import React from "react";
import PokeCard from "../poke-card/poke-card";

const PokeList = (props) => (
  <div className="poke-list">
    {props.pokemons.map((element) => (
      <PokeCard key={element.id} pokemon={element}/>
    ))}
  </div>
);

export default PokeList;