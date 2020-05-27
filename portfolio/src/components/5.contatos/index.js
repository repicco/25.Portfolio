import React from 'react'
import './style.css'

function Contatos() {
    return (
        <div id='contatos' className='container'>
            <div className='row card blue-grey lighten-4 center-align'>
                <h4 className='card-title'><b>Contatos</b></h4>
                <div id='card_contatos' className='row card center-align'>
                    <div className='col s12 m2 offset-m4 card-contatos'>
                        <div className='bk_linkedin'>
                            <a target='_blank' rel="noopener noreferrer"  href='https://www.linkedin.com/in/repicco/'><i className="fab fa-linkedin-in icon_linkedin"></i></a>
                        </div>
                    </div>
                    <div className='col s12 m2 card-contatos'>
                        <div className='bk_whatsapp'>
                            <a target='_blank' rel="noopener noreferrer" href='https://wa.me/5511984944825'><i className="fab fa-whatsapp icon_whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contatos