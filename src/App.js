import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Education from './components/Education';
import SiteArchitecture from './components/SiteArchitecture'
import Contact from './components/Contact';
import ModalHeadsUp from './components/ModalHeadsUp'

import './styles/ModalHeadsUp.css';
import './styles/App.css';
import './styles/Nav.css';
import './styles/Intro.css';
import './styles/Skills.css';
import './styles/Education.css';
import './styles/Contact.css';


function App() {
  return (
    <div className="App">  
        <ModalHeadsUp/>
        <Header/> 
        <Intro/>  
        <Skills/>
        <Education/>
        <SiteArchitecture/>
        <Contact/>
        {/* <Chart/> */}
    </div>
  );
}

export default App;
