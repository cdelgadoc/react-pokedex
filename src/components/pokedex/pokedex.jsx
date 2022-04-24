import React, { Component } from 'react';
import PokeList from './poke-list/poke-list';
import PokeSearch from './poke-search/poke-search';

export default class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/pokemon/")
      .then((response) => response.json())
      .then((pokeList) => this.setState({ pokemons: pokeList }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <PokeSearch
          onSearchChange={this.onSearchChange}
          placeholder="SEARCH YOUR POKEMON"/>
        <PokeList pokemons={filteredPokemons} />
        <br/><br/>
      </div>
    );
  }
}



