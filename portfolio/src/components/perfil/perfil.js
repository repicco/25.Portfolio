import React from 'react'

function Perfil() {
    return (
        <div className='container'>
            <div className='card blue-grey lighten-4'>
                <div className='row card-content'>
                    <div className='col s12 card-title center-align'>
                        <h2>Habilidades</h2>
                    </div>
                    <div className='col s6'>
                        <h4>Intermediário</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript + Es6</li>
                            <li>Jquery</li>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                        </ul>
                        <br/>
                    </div>
                    <div className='col s6'>
                    <h4>Básico</h4>
                        <ul>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>Babel</li>
                            <li>PHP</li>
                            <li>Wordpress</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
                <div className='card-action'>
                <h4>Extras</h4>
                        <ul>
                            <li>Ingles Técnico</li>
                            <li>Metodologia Scrum e Agil</li>
                            <li>Versionamento Github</li>
                            <li>Versionamento Netlify</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Perfil