
import './App.css';
import Button from './components/Button';
import FreeCodeCamp_logo from './images/FreeCodeCamp_logo.svg';

function App() {

  const handleClick = () => {
    alert('Click');
  }

  const resetCounter = () => {
    alert('Reset');
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
  );
}

export default App;
