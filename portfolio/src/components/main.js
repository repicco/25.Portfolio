import React from 'react'

import Header  from './header/header';
import Profile from './profile/profile';
import Perfil from './perfil/perfil';
import PortfolioHeader from './portfolioheader/portfolioheader';
import Contatos from './contatos/contatos'

function Main() {
    return (
        <div>
            <Header/>
            <Profile/>
            <Perfil/>
            <PortfolioHeader/>  
            <Contatos/>          
        </div>
    )
}

export default Main