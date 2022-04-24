import React from 'react';

import './poke-search.css';

const PokeSearch = props => (
  <input
    className='poke-search'
    type='search'
    placeholder={props.placeholder}
    onChange={props.onSearchChange}
  />
);

export default PokeSearch;
