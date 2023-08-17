import { useState } from "react";
import { tvShows } from "./data";

function Season({ seasons }) {

    const currentSeason = seasons[0];
  
    return (
      <div>
        <div className="container">
          <img src={currentSeason.image} alt="poster" width="300px" />
        </div>
        <div className="container">
          <h2>{currentSeason.season}</h2>
        </div>
        <div className="container">
          <h3>{currentSeason.description}</h3>
        </div>
    </div>
    
    );
  }
  
  export default Season;