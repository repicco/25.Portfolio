
import React from 'react'
import logo from '../../img/LogoRenatoPiccoBr.png'

function Header () {
    return (
        <div id='header' className='row bgheader'>
            <div className='container'>
                <nav>
                    <div className='nav-wrapper'>
                        <div className='brand-logo'>
                        <img alt='logo' className='img_logo responsive-img' src={logo}></img>
                        </div>
                        
                        <ul className='right hide-on-med-and-down'>
                            <li className='btn'><a href='/'>Perfil</a></li>
                            <li className='btn'><a href='#portfolio'>Portfolio</a></li>
                            <li className='btn'><a href='#contatos'>Contatos</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header