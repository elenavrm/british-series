import { useState } from 'react';
import { tvShows } from './data'
import './App.css';
import Season from './Season';


function App() {
  
  const [shows, setShows] =  useState(tvShows);

  const deleteShow = (id) => {
    let newShows = shows.filter(element => element.id !== id);
    setShows(newShows);
  }

  return (
    <div>
      <div className="container">
        <h1>Top {tvShows.length} British Series</h1>
      </div>
    {tvShows.map((element => {
      const { id, name, seasons } = element;
      return (
        <div key={id}>
          <div className='container'>
            <h2>{id} - {name}</h2>
          </div>
          <Season seasons={seasons}/>

          <div className='container'>
            <button className='btn' onClick={() => deleteShow(id)}> delete </button>
          </div>
        
        </div>
        
      )
    }))}
    </div>
  );
}


export default App;