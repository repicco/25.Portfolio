    import React from 'react'
import logo from '../../img/LogoRenatoPiccoBr.png'

function Header () {
    return (
        <div className='row bgheader'>
            <div className='container'>
                <nav>
                    <div className='nav-wrapper'>
                        <div className='brand-logo'>
                        <img alt='logo' className='img_logo responsive-img' src={logo}></img>
                        </div>
                        
                        <ul className='right hide-on-med-and-down'>
                            <li className='btn'>Perfil</li>
                            <li className='btn'>Portfolio</li>
                            <li className='btn'>Contatos</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header