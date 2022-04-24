import React from "react";
import PokeEvol from "./PokeEvol";

const EvolutionChain = (props) => (
  <div className="evolution-chain">
    {props.pokemons.map((element) => (
      <PokeEvol key={element.id} pokemon={element}/>
    ))}
  </div>
);

export default EvolutionChain;