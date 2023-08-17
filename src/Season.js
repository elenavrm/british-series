import { useState } from "react";
import { tvShows } from "./data";

function Season({ seasons }) {

    const currentSeason = seasons[0];

    const [series, setSeries] = useState(0);
    const { season, image, description } = tvShows[series];
    console.log(tvShows)

    const [showMore, setShowMore] = useState(false);

    const previousShow = () => {
        setSeries ((series => {
            series --;
            if (series < 0) {
                return tvShows.length -1;
            }
            return tvShows;
        }))
    }

    const nextShow = () => {
        setSeries ((series => {
            series ++;
            if (series > tvShows.length -1) {
                series = 0;
            }
            return series;
        }))
    }


  
    return (
      <div>
        <div className="container">
          <img src={currentSeason.image} alt="poster" width="300px" />
        </div>
        <div className="container">
          <h2>{currentSeason.season}</h2>
        </div>
        <div className="container">
          <h3>{showMore ? currentSeason.description : currentSeason.description.substring(0, 111) + "..."}
          <button onClick={() => setShowMore(!showMore)}>{showMore ? "show less" : "show more"}</button>
          </h3>
        </div>
        <div className="container buttonTwo">
            <button className="btnTwo" onClick={previousShow}>previous</button>
            <button className="btnTwo" onClick={nextShow}>next</button>
        </div>
    </div>
    
    );
  }
  
  export default Season;