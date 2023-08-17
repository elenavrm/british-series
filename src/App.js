import { useState } from 'react';
import { tvShows } from './data'
import './App.css';



function App() {
  return (
    <div>
      <div className="container">
        <h1>Top {tvShows.length} British Series</h1>
      </div>
      {tvShows.map((show) => (
        <div key={show.id}>
          <div className="container">
            <h2>
              {show.id} - {show.name}
            </h2>
          </div>
          
   
          
        </div>
      ))}
    </div>
  );
}

export default App;