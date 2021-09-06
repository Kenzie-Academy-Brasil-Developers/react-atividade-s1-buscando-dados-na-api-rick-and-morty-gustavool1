import './App.css';
import Character from './components/Characters';

import { useState, useEffect } from 'react';
function App() {
  const [ characterList, setcharacterList ] = useState(null)
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      return response.json()
    })
    .then((data) =>{
      setcharacterList(data)
    })
  },[])
  console.log(characterList)
  return (
    <div className="App">
      <header className="App-header">
        {characterList && <Character charactersList={characterList}></Character>}
      </header>
    </div>
  );
}

export default App;

// 'https://rickandmortyapi.com/api/character/'