import React from 'react'
import Portfolio from '../portfolio/portfolio'

import Edwcontabil from '../../img/portfolio/edwcontabil.jpg'
import Churras from '../../img/portfolio/churras.jpg'
import Mercado from '../../img/portfolio/mercado.jpg'
import Airbnb from '../../img/portfolio/airbnb.jpg'
import Atendi from '../../img/portfolio/atendi.jpg'
import Orcamento from '../../img/portfolio/orcamento.jpg'
import Spotify from '../../img/portfolio/spotify.jpg'
import Financas from '../../img/portfolio/financas.jpg'
import Museu from '../../img/portfolio/museu.jpg'
import Parallax from '../../img/portfolio/parallax.jpg'
import Poupe from '../../img/portfolio/poupedinheiro.jpg'
import Biscoito from '../../img/portfolio/biscoito.jpg'


function PortfolioHeader(props) {
    return (
        <div id='portfolio' className='container'>
            <div className='row'>
                <div className='col s12'>
                    <div className='card blue-grey lighten-4 center-align'>
                        <h2>Portfólio</h2>
                    </div>
                </div>             
            </div>

            <div className="row">
                <Portfolio
                    title='App Biscoito Chines'
                    img={Biscoito}
                    techs='Materialize + React.JS (Lógica)'
                    link='https://biscoitosorte.netlify.com/'
                />
                <Portfolio
                    title='App Poupar'
                    img={Poupe}
                    techs='Materialize + React.JS (Lógica)'
                    link='https://originfinance.netlify.com/'
                />
                <Portfolio
                    title='App Calc Churrasco'
                    img={Churras}
                    techs='Bootstrap + Javascript (Lógica)'
                    link='https://churras.netlify.com'
                />
            </div>
            <div className='row'>
                <Portfolio
                    title='LP Mercado Delivery'
                    img={Mercado}
                    techs='Bootstrap'
                    link='https://mercadofoodservice.net.br/'
                />
                <Portfolio
                    title='AirBNB Layout'
                    img={Airbnb}
                    techs='Bootstrap + Javascript (consumo de API)'
                    link='https://airbnbfake.netlify.com'
                />
                <Portfolio
                    title='LP Atendimento'
                    img={Atendi}
                    techs='HTML + CSS (Flexbox)'
                    link='https://atenditudo.com.br'
                />                
            </div>
            <div className='row'>
                <Portfolio
                    title='App Orçamento'
                    img={Orcamento}
                    techs='Bootstrap + JavaScript (Lógica Es6 + Babel)'
                    link='https://orcamentofake.netlify.com/apporcamento/'
                />
                <Portfolio
                    title='Spotify Layout'
                    img={Spotify}
                    techs='Bootstrap'
                    link='https://spotify-fake.netlify.com'
                />
                <Portfolio
                    title='Finanças Layout'
                    img={Financas}
                    techs='Bootstrap'
                    link='https://financeirofake.netlify.com/finans/'
                />                
            </div>
            <div className='row'>
                <Portfolio
                    title='EDW Contabil'
                    img={Edwcontabil}
                    techs='HTML + CSS'
                    link='http://edwcontabil.com.br/'
                />
                <Portfolio
                    title='Parallax Layout'
                    img={Parallax}
                    techs='Html + CSS'
                    link='https://parallaxex.netlify.com/'
                />
                <Portfolio
                    title='Museu Layout'
                    img={Museu}
                    techs='HTML + CSS'
                    link='https://museufake.netlify.com/museunacional/'
                />
            </div>            
        </div>
    )
}

export default PortfolioHeader