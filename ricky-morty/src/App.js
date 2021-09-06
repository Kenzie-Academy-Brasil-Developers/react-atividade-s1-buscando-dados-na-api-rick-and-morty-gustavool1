import './App.css';
import Character from './components/Characters';
import Message from './components/Message';
import { useState, useEffect } from 'react';
function App() {
  const [ characterList, setcharacterList ] = useState(null)
  const [page, setPage] = useState(1)
  const [watchingPages, setWatchingPages  ] = useState(0)
  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response =>{
      return response.json()
    })
    .then((data) =>{
      setcharacterList(data)
    })
  },[page])
  const nextPage = () =>{
    setPage(page + 1)
    setWatchingPages(0)
    
  }
  const previousPage = () =>{
    if(page > 1){
      setPage(page-1)
    }
    if(page===1){
      setWatchingPages(1)
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meus personagens</h1>
        <section>
          <button onClick={previousPage} className='nav-controll-buttons'>Previous</button>
          <button  onClick = {nextPage} className='nav-controll-buttons'>Next</button>
        </section>
        { watchingPages=== 1  &&  <Message></Message>}
        {characterList && <Character charactersList={characterList}></Character>}
      </header>
    </div>
  );
}

export default App;

// 'https://rickandmortyapi.com/api/character/'