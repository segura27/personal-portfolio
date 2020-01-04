import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Education from './components/Education';
import './styles/App.css';
import './styles/Nav.css';
import './styles/Intro.css';
import './styles/Skills.css';
import './styles/Education.css';

function App() {
  return (
    <div className="App">  
        <Header/> 
        <Intro/>  
        <Skills/>
        <Education/>
        {/* <Chart/> */}
    </div>
  );
}

export default App;
