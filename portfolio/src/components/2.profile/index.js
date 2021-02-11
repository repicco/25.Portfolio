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
                            <h5>Dev. Frontend Pleno</h5>
                            <div className='contatos'>
                                <div className='bk_linkedin'>
                                    <a target='_blank' rel="noopener noreferrer"  href='https://www.linkedin.com/in/repicco/'><i className="fab fa-linkedin-in icon_linkedin"></i></a>
                                </div>
                                <div className='bk_whatsapp'>
                                    <a target='_blank' rel="noopener noreferrer" href='https://wa.me/5511984944825'><i className="fab fa-whatsapp icon_whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row card-action center-align'>
                        <h5>Resumo</h5>
                        <p>13 anos de experiência na Área de TI, atuando com implantação de novas tecnologias, interface com clientes, suporte técnico, planejamento e execução de Projetos de Infraestrutura.</p>
                        <p>3 anos dedicados na área de Desenvolvimento Frontend, atuando com sistemas em Jquery, Javascript, ReactJS e VueJS</p>
                    </div>
                </div>
        </div>

    )
}

export default Profile