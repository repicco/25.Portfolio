import React from 'react'
import Portfolio from '../portfolio/portfolio'

import Churras from '../../img/portfolio/churras.jpg'
import Mercado from '../../img/portfolio/mercado.jpg'
import Airbnb from '../../img/portfolio/airbnb.jpg'
import Atendi from '../../img/portfolio/atendi.jpg'
import Orcamento from '../../img/portfolio/orcamento.jpg'
import Spotify from '../../img/portfolio/spotify.jpg'

function PortfolioHeader(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col s12'>
                    <div className='card blue-grey lighten-4 center-align'>
                        <h2>Portfólio</h2>
                    </div>
                </div>             
            </div>

            <div className="row">
                <Portfolio
                    title='Cálculo de Churrasco'
                    img={Churras}
                    techs='Bootstrap + Javascript (Lógica)'
                    link='https://churras.netlify.com'
                />
                <Portfolio
                    title='LP Mercado Delivery'
                    img={Mercado}
                    techs='Bootstrap'
                    link='https://mercadofoodservice.net.br/'
                />
                <Portfolio
                    title='AirBNB Fake'
                    img={Airbnb}
                    techs='Bootstrap + Javascript (consumo de API)'
                    link='https://airbnbfake.netlify.com'
                />
            </div>
            <div className='row'>
                <Portfolio
                    title='LP Atendimento Digital'
                    img={Atendi}
                    techs='HTML + CSS (Flexbox)'
                    link='https://atenditudo.com.br'
                />
                <Portfolio
                    title='App Orçamento Web'
                    img={Orcamento}
                    techs='Bootstrap + JavaScript (Lógica Es6 + Babel)'
                    link='https://orcamentofake.netlify.com'
                />
                <Portfolio
                    title='Spotify Fake'
                    img={Spotify}
                    techs='Bootstrap'
                    link='https://spotify-fake.netlify.com'
                />
            </div>




            
        </div>
    )
}

export default PortfolioHeader