import './App.css';
import Character from './components/Characters';
import ChardCard from './components/CharCard';
import { useState, useEffect } from 'react';
function App() {
  const [ characterList, setcharacterList ] = useState([])
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/',).then(response => response.json())
    .then(response => setcharacterList(response))
    .catch((err)=>console.log(err))
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <Character charactersList={characterList}></Character>
      </header>
    </div>
  );
}

export default App;

// 'https://rickandmortyapi.com/api/character/'