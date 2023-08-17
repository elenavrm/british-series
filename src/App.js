import { useState } from 'react';
import { tvShows } from './data'
import './App.css';
import Season from './Season';



function App() {
  return (
    <div>
      <div className="container">
        <h1>Top {tvShows.length} British Series</h1>
      </div>
    {tvShows.map((element => {
      const { id, name, seasons } = element;
      return (
        <div>
          <div className='container'>
            <h2>{id} - {name}</h2>
          </div>
          <Season seasons={seasons}/>
        </div>
      )
    }))}
    </div>
  );
}

export default App;