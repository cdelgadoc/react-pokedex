import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokedex from './components/pokedex/pokedex';
import Pokemon from './components/pokemon/pokemon';
import logo from './assets/images/pokelogo.png';

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <Router>
          <Switch>
            <Route path="/" exact component={Pokedex}/>
            <Route path="/pokedex" component={Pokedex}/>
            <Route path="/pokemon/:name" component={Pokemon}/>
          </Switch>
        </Router>
      </div>
    );
  }
}