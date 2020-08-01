import React from 'react'
import './style.css'
import Slider from "react-slick";

import Portfolio from './portfolioItem'

import Edwcontabil from '../../img/portfolio/edwcontabil.jpg'
import Churras from '../../img/portfolio/churras.jpg'
import Mercado from '../../img/portfolio/mercado.jpg'
import Airbnb from '../../img/portfolio/airbnb.jpg'
import Atendi from '../../img/portfolio/atendi.jpg'
import Spotify from '../../img/portfolio/spotify.jpg'
import Poupe from '../../img/portfolio/poupedinheiro.jpg'
import Cronometro from '../../img/portfolio/cronometro.jpg'
import Filmes from '../../img/portfolio/filmes.jpg'
import Aulaingles from '../../img/portfolio/aulaingles.jpg'
import Petstore from '../../img/portfolio/petstore.jpg'
import Blog from '../../img/portfolio/blog.jpg'


function PortfolioHeader(props) {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    
    return (
        <div id='portfolio' className='container'>
            <div className='row'>
                <div className='col s12'>
                    <div className='card blue-grey lighten-4 center-align'>
                        <h2>Portfólio</h2>
                    </div>
                </div>             
            </div>

            <div className="row card_container">
                <Slider {...settings}>
                <Portfolio
                        title='Blog Programador'
                        img={Blog}
                        techs='Firebase + React.JS + Flexbox'
                        link='https://blogdev.netlify.app/'
                    />
                    <Portfolio
                        title='LP Pet Store'
                        img={Petstore}
                        techs='Flexbox + React.JS (ReactSlick)'
                        link='https://seri-e.netlify.app/'
                    />
                    <Portfolio
                        title='PowerSite (API) Filmes'
                        img={Filmes}
                        techs='Bootstrap + React.JS (Lógica)'
                        link='https://filmespicco.netlify.app/'
                    />
                    <Portfolio
                    title='LP Aulas de Inglês'
                    img={Aulaingles}
                    techs='Materialize + ReactJS (ReactSlick)'
                    link='https://mariadrozina.netlify.app/'
                    />
                    <Portfolio
                        title='PowerSite Cronometro'
                        img={Cronometro}
                        techs='Flexbox + React.JS (Lógica)'
                        link='https://cronometropicco.netlify.app/'
                    />
                    <Portfolio
                        title='PowerSite Poupar'
                        img={Poupe}
                        techs='Materialize + React.JS (Lógica)'
                        link='https://originfinance.netlify.com/'
                    />
                    <Portfolio
                    title='PowerSite Calc Churrasco'
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
                        title='AirBNB (API) Layout'
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
                    <Portfolio
                        title='Spotify Layout'
                        img={Spotify}
                        techs='Bootstrap'
                        link='https://spotify-fake.netlify.com'
                    />
                    <Portfolio
                        title='EDW Contabil'
                        img={Edwcontabil}
                        techs='HTML + CSS'
                        link='http://edwcontabil.com.br/'
                    />
                </Slider>
                                    
            </div>
            <div className='row'>
                            
            </div>
            <div className='row'>
                
            </div>
            <div className='row'>
                
            </div>            
        </div>
    )
}

export default PortfolioHeader