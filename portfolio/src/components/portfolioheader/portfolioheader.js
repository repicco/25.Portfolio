import React from 'react'
import Portfolio from '../portfolio/portfolio'

import Profile from '../../img/portfolio/profile.jpg'
import Churras from '../../img/portfolio/churras.jpg'
import Mercado from '../../img/portfolio/mercado.jpg'
import Airbnb from '../../img/portfolio/airbnb.jpg'
import Atendi from '../../img/portfolio/atendi.jpg'
import Orcamento from '../../img/portfolio/orcamento.jpg'
import Spotify from '../../img/portfolio/spotify.jpg'
import Financas from '../../img/portfolio/financas.jpg'
import Museu from '../../img/portfolio/museu.jpg'
import Noticias from '../../img/portfolio/noticias.jpg'
import Hotel from '../../img/portfolio/hotel.jpg'
import Parallax from '../../img/portfolio/parallax.jpg'


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
                    title='Profile'
                    img={Profile}
                    techs='Materialize + React.JS'
                    link=''
                />
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
            </div>
            <div className='row'>
                <Portfolio
                    title='AirBNB Layout'
                    img={Airbnb}
                    techs='Bootstrap + Javascript (consumo de API)'
                    link='https://airbnbfake.netlify.com'
                />
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
                    link='https://orcamentofake.netlify.com/apporcamento/'
                />
            </div>
            <div className='row'>
                <Portfolio
                    title='Spotify Layout'
                    img={Spotify}
                    techs='Bootstrap'
                    link='https://spotify-fake.netlify.com'
                />
                <Portfolio
                    title='Parallax Layout'
                    img={Parallax}
                    techs='Html + CSS'
                    link='https://parallaxex.netlify.com/'
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
                    title='Museu Layout'
                    img={Museu}
                    techs='HTML + CSS'
                    link='https://museufake.netlify.com/museunacional/'
                />
                <Portfolio
                    title='Noticias Layout'
                    img={Noticias}
                    techs='HTML + CSS'
                    link='https://newfake.netlify.com/noticiascidade/index.html'
                />
                <Portfolio
                    title='Hotel Layout'
                    img={Hotel}
                    techs='HTML + CSS'
                    link='https://hotelfake.netlify.com/chalehotel/'
                />
            </div>            
        </div>
    )
}

export default PortfolioHeader