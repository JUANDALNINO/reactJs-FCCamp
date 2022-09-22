import './App.css';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg';

function App() {
  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className="freeCodeCamp-logo"
          alt="Logo" />
      </div>
    </div>
  );
}

export default App;