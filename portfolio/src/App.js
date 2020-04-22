import React from 'react';

import Header  from './components/1.header';
import Profile from './components/2.profile';
import Skills from './components/3.skills';
import Portfolio from './components/4.portfolio';
import Contatos from './components/5.contatos';

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
