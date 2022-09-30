import './App.css';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg';
import Button from './components/Button';
import Monitor from './components/Monitor';
import BtnClear from './components/BtnClear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    setInput();
  }

  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className="freeCodeCamp-logo"
          alt="Logo" />
      </div>

      <div className='container-calculator'>
        <div className='containerMonitor'>
          <Monitor input={input}/>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>=</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <BtnClear handleClick={() => setInput('')}>CLEAR</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;