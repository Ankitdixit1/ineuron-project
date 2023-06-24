import React, { useState } from 'react';
import './App.css'
import Axios from "axios";

function App() {
  const [pokemonData, setPokemonData] = useState({
    abilities: [],
    search: '',
    imges: ''
  });


//fetch data from the data base 

  const searchPokemon = async () => {
    const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonData.search}`);
    setPokemonData((prevState) => ({
      ...prevState,
      abilities: data.abilities,
      imges:data.sprites.other["official-artwork"].front_default,
    }));
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPokemonData((prevState) => ({
      ...prevState,
      search: value,
    }));
  };

  return (
    <>
      <h1>Search your pokemon</h1>
      <input
        type="text"
        value={pokemonData.search}
        onChange={handleInputChange}
        placeholder="ditto"
      />
      <button onClick={searchPokemon}>Search</button>
      <div className='img-li'>
      <ul>
        {pokemonData.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <img src={pokemonData.imges} alt="Pokemon" />
      </div>
    </>
  );
}

export default App;

