import { useState } from 'react';
import { senseEight } from './data';
import { peakyBlinders } from './data';
import { sherlock } from './data';
import './App.css';

function App() {
  

  const [filmOne, setFilmOne] = useState(0);
  const {idOne, nameOne, seasonOne, imageOne, descriptionOne} = senseEight[filmOne];
  const [showMoreOne, setShowMoreOne] = useState(false);


  const [filmTwo, setFilmTwo] = useState(0);
  const { idTwo, nameTwo, seasonTwo, imageTwo, descriptionTwo} = peakyBlinders[filmTwo];
  const [showMoreTwo, setShowMoreTwo] = useState(false);

  const [filmThree, setFilmThree] = useState(0);
  const { idThree, nameThree, seasonThree, imageThree, descriptionThree} = sherlock[filmThree];
  const [showMoreThree, setShowMoreThree] = useState(false);

  

  const previousFilmOne = () => {
    setFilmOne((film => {
      film --;
      if (film < 0) {
        return senseEight.length -1;
      }
      return film;
    }))

  }

  const nextFilmOne = () => {
    setFilmOne((film => {
      film ++;
      if (film > senseEight.length -1) {
        film = 0;
      }
      return film;
    }))
  }

  const previousFilmTwo = () => {
    setFilmTwo((filmOne => {
      filmOne --;
      if (filmOne < 0) {
        return peakyBlinders.length -1
      }
      return filmOne;
      
    }))
  }

  const nextFilmTwo = () => {
    setFilmTwo((filmOne => {
      filmOne ++;
      if (filmOne > peakyBlinders.length -1) {
        filmOne = 0;
      }
      return filmOne;
    }))
  }

  const previousFilmThree = () => {
    setFilmThree((filmTwo => {
      filmTwo --;
      if (filmTwo < 0) {
        return sherlock.length -1;
      }
      return filmTwo;
    }))
  }

  const nextFilmThree = () => {
    setFilmThree ((filmTwo => {
      filmTwo ++;
      if (filmTwo > sherlock.length -1) {
        filmTwo = 0;
      }
      return filmTwo;
    }))
  }

  return (
    <div>

<div className='container'>
  <h1> Top British Series</h1>
</div>

<div className="container">
      <h1> {idOne} - {nameOne} </h1>
    </div>

    <div className='container'>
      <img src={imageOne} width="300px" alt="series poster"/>
    </div>

    <div className='container'>
      <h2>{seasonOne}</h2>
    </div>

    <div className='container'>
      <h3>{showMoreOne ? descriptionOne : descriptionOne.substring(0,121) + "..."}
      <button onClick={() => setShowMoreOne(!showMoreOne)}>{showMoreOne ? "show less" : "show more"}</button>
      </h3>
    </div>

    <div className='container'>
      <button onClick={previousFilmOne}> PREVIOUS </button>
      <button onClick={nextFilmOne}> NEXT </button>
    </div>

    <div className='container'>
      <button> DELETE </button>
    </div>

    <div className='container'>
  <h1> {idTwo} - {nameTwo}</h1>
    </div>

    <div className='container'>
      <img src={imageTwo} width ="300px" alt="series poster"/>
    </div>

    <div className='container'>
      <h2>{seasonTwo}</h2>
    </div>

    <div className='container'>
    <h3>{showMoreTwo ? descriptionTwo : descriptionTwo.substring(0,121) + "..."}
      <button onClick={() => setShowMoreTwo(!showMoreTwo)}>{showMoreTwo ? "show less" : "show more"}</button>
      </h3>
    </div>

    <div className='container'>
      <button onClick={previousFilmTwo}> PREVIOUS </button>
      <button onClick={nextFilmTwo}> NEXT </button>
    </div>

    <div className='container'>
      <button> DELETE </button>
    </div>

    <div className='container'>
      <h1>{idThree} - {nameThree}</h1>
    </div>

    <div className='container'>
      <img src={imageThree} width="300px" alt="series poster"/>
    </div>

    <div className='container'>
      <h2>{seasonThree}</h2>
    </div>

    <div className='container'>
    <h3>{showMoreThree ? descriptionThree : descriptionThree.substring(0,120) + "..."}
      <button onClick={() => setShowMoreThree(!showMoreThree)}>{showMoreThree ? "show less" : "show more"}</button>
      </h3>
    </div>

    <div className='container'>
      <button onClick={previousFilmThree}> PREVIOUS </button>
      <button onClick={nextFilmThree}> NEXT </button>
    </div>

    <div className='container'>
      <button> DELETE </button>
    </div>

    <div className='container'>
      <button className="btn"> DELETE ALL </button>
    </div>

    </div>
  );

}

export default App;
