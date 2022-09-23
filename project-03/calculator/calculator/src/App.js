import './App.css';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg';
import Button from './components/Button';
import Monitor from './components/Monitor';

function App() {
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
          <Monitor />
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>0</Button>
          <Button>.</Button>
          <Button>=</Button>
          <Button>/</Button>
        </div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;