import './App.css';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <div className='containerPrincipal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>

        <Testimonials 
          name='Shawn Wang'
          country='Singapore'
          image='ShawnWang'
          position='Software Engineer'
          company='Amazon'
          testimony="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life." 
        />

        <Testimonials 
          name='Sarah Chima'
          country='Nigeria'
          image='SarahChima'
          position='Software Engineer'
          company='ChatDesk'
          testimony="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." 
        />

        <Testimonials 
          name='Emma Bostian'
          country='Sweden'
          image='EmmaBostian'
          position='Software Engineer'
          company='Spotify'
          testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." 
        />
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