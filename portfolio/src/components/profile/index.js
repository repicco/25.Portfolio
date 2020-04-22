import React from 'react'
import './style.css'

import Foto from '../../img/Renato.jpg'
import logo from '../../img/LogoRenatoPicco.png'

function Profile() {
    return (
        <div id='profile' className='container'>
                <div className='card blue-grey lighten-4'>
                    <div className='row card-content'>
                        <div className='col s8 offset-s2 m2 offset-m1 center-align'>
                            <img alt='Foto perfil' src={Foto} className='img_profile circle responsive-img'></img>
                        </div>
                        <div className='col s12 m4 offset-m2 center-align'>
                            <img alt='Logo' src={logo} className='img_logo responsive-img'></img>
                            <h5>Dev. Frontend</h5>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default Profile