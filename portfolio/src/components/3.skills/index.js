import React from 'react'
import './style.css'

import Intermediario from '../../img/intermediario.png'
import Basico from '../../img/basico.jpg'
import Bonus from '../../img/bonus.jpg'

function Perfil() {
    return (
        <div id='skill' className='container'>
            <div  className='card blue-grey lighten-4'>
                <div className='row card-content'>
                    <div className='col s12 card-title center-align'>
                        <h2>Habilidades</h2>
                    </div>
                    <div className='col s12 m5 card'>
                        <h4 className='card-title'><b>Intermediário</b></h4>
                        <ul className='card-content'>
                            <li>React JS</li>
                            <li>SPA</li>
                            <li>PWA</li>
                            <li>Javascript + Es6</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Flexbox</li>
                            <li>Styled Components</li>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                        </ul>
                        <div className="card-image center-align">
                            <img alt='intermediario' src={Intermediario}></img>
                        </div>
                        <br/>
                    </div>
                    <div className='col s12 m5 offset-m1 card'>
                        <h4 className='card-title'><b>Básico</b></h4>
                        <ul className='card-content'>
                            <li>React Native</li>
                            <li>AXIOS</li>
                            <li>SASS</li>
                            <li>NodeJS</li>
                            <li>PHP</li>
                            <li>Wordpress</li>
                            <li>Figma</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                        <div id='img_basic' className="card-image center-align">
                            <img alt='basico' src={Basico}></img>
                        </div>
                    </div>
                </div>
                <div className='card-action center-align'>
                    <div className='card'>
                        <div className='row'>
                            <div className='col s12 m6'>
                                <h4 className='card-title'><b>Extras</b></h4>
                                <ul className='card-content'>
                                    <li>Ingles Técnico</li>
                                    <li>Metodologia Scrum e Agil</li>
                                    <li>Versionamento Github</li>
                                    <li>Versionamento Netlify</li>
                                </ul>
                            </div>

                            <div id='img_extra' className="col s12 m4 card-image center-align">
                                <img alt='basico' src={Bonus}></img>
                            </div>
                        </div>
                    </div>

 
                </div>
            </div>
        </div>
    )
}

export default Perfil