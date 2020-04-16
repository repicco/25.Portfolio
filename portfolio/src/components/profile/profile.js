import React from 'react'
import Foto from '../../img/Renato.jpg'
import logo from '../../img/LogoRenatoPicco.png'

function Profile() {
    return (
        <div id='profile' className='container'>
                <div className='card blue-grey lighten-4'>
                    <div className='col s4 m2'>
                        <img alt='Foto perfil' src={Foto} className='img_profile circle responsive-img'></img>
                    </div>
                    <div className='row card-content'>
                        <div className='col s8 m4 offset-m3 right-align'>
                            <img alt='Logo' src={logo} className='img_logo responsive-img'></img>
                            <h5>Dev. Frontend</h5>
                        </div>

                    </div>
                </div>
        </div>

    )
}

export default Profile