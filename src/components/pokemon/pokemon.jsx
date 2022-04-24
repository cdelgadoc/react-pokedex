import React, { Component } from "react";
import Infomon from "./infomon/Infomon";
import Description from "./description/Description";
import Stats from "./stats/Stats";
import Types from "./types/Types";
import Abilities from "./abilities/Abilities";
import EvolutionChain from "./evolutionChain/EvolutionChain";
import Button from '@material-ui/core/Button';

import pokeball from '../../assets/images/pokeball.png';
import pika from '../../assets/images/Pika.gif'

export default class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.match.params.name,
      pokemon: {},
      abilities: [],
      stats: [],
      types: [],
      evolutionChain: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8080/pokemon/${this.state.name}`)
      .then((response) => response.json())
      .then((element) => this.setState({ 
        pokemon: element, 
        abilities: element.abilities,
        stats: element.stats,
        types: element.types,
        evolutionChain: element.evolutionChain,
        loading: false
       }));
  }

  render() {
    const { loading } = this.state;
    if(loading) {
      return (
        <img src={pika} alt="pika" className="avatar"/>
      )
    }

    return (
      <div>
        <div className="pokedex">
          <Button variant="contained" color="primary" href="/pokedex">
          <img src={pokeball} className="pokeball" alt="pokeball"/>
            <p>Poke-Search</p>
          </Button>
        </div>
        <br/>
        <div className="pokemon-container">
          <Infomon pokemon={this.state.pokemon}/>
            <div>
                <Description description={this.state.pokemon.description} 
                  weight={this.state.pokemon.weight}
                  height={this.state.pokemon.height}/>
            </div>
            <Types types={this.state.types}/>
            <Abilities abilities={this.state.abilities}/>      
          </div>
          <br/>
          <div className="x-container">
            <Stats stats={this.state.stats}/>
            <div className="element-container">
              <h3 className="subtitle">Evolution Chain</h3>
              <EvolutionChain pokemons={this.state.evolutionChain}/>
            </div>
          </div>
          <br/>
          <br/>
      </div>
    )
  }
}
