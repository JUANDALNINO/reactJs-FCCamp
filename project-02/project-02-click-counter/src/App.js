
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import FreeCodeCamp_logo from './images/FreeCodeCamp_logo.svg';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks+1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="freeCodeCampLogoContainer">
        <img 
          className="freeCodeCampLogo"
          src={FreeCodeCamp_logo}
          alt="logo for freeCodeCamp"
        />
      </div>
      <div className="containerPrincipal">
        <Counter numClicks={numClicks} />
        <div>
          <Button
            text='Click'
            isBtnClick={true}
            handleClick={handleClick}/>

          <Button 
            text='Reset'
            isBtnClick={false}
            handleClick={resetCounter}/>
        </div>
      </div>
      <div className='footer'>
        <br />
        <a href="https://www.linkedin.com/in/juandalnino/" className='counter fs-4 createdBy text-warning'>By Juan David Lizarralde Niño <br />
        </a>
        <p className='counter fs-5 year'>2022<br />Created with React Js</p>
      </div>
    </div>
  );
}

export default App;
