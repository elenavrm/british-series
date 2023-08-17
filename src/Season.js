import { useState } from "react";

function Season({ seasons }) {
  const [series, setSeries] = useState(0);
  const currentSeason = seasons[series]; 

  const [showMore, setShowMore] = useState(false);

  const previousShow = () => {
    setSeries((series) => {
      let newSeries = series - 1;
      if (newSeries < 0) {
        newSeries = seasons.length - 1;
      }
      return newSeries;
    });
  };

  const nextShow = () => {
    setSeries((series) => {
      let newSeries = series + 1;
      if (newSeries > seasons.length - 1) {
        newSeries = 0;
      }
      return newSeries;
    });
  };

  return (
    <div>
      <div className="container">
        <img src={currentSeason.image} alt="poster" width="300px" />
      </div>
      <div className="container">
        <h2>{currentSeason.season}</h2>
      </div>
      <div className="container">
        <h3>
          {showMore
            ? currentSeason.description
            : currentSeason.description.substring(0, 111) + "..."}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "show less" : "show more"}
          </button>
        </h3>
      </div>
      <div className="container buttonTwo">
        <button className="btnTwo" onClick={previousShow}>
          back
        </button>
        <button className="btnTwo" onClick={nextShow}>
          next
        </button>
      </div>
    </div>
  );
}

export default Season;