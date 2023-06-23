import React, { useState } from 'react';
import './App.css'
import Axios from "axios";

function App() {
const [getpokemon,setpokemon] = useState('')
const[search,setsearch]=useState('');
const searchpok = async() => {
  const {data} = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
  
}
  return (
    <>
    <h1>hellow</h1>
    <input type="text" value={search} onChange={(e)=> setsearch(e.target.value)} placeholder='ditto'/>
    <button onClick={searchpok}>search</button>
    </>
  );
}

export default App;

