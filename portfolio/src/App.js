import React from 'react';

import Header  from './components/header';
import Profile from './components/profile';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contatos from './components/contatos';

function App() {
  return (
    <div>
        <Header/>
        <Profile/>
        <Skills/>
        <Portfolio/>  
        <Contatos/>    
    </div>
  );
}

export default App;
