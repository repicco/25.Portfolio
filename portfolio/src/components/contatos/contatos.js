import React from 'react'

function Contatos() {
    return (
        <div id='contatos' className='container'>
            <div className='row card blue-grey lighten-4 center-align'>
                <h4 className='card-title'><b>Contatos</b></h4>
                <div id='card_contatos' className='row card'>
                    <div className='col s12 m4 offset-m2 center-align'>
                        <a target='_blank' rel="noopener noreferrer"  href='https://www.linkedin.com/in/repicco/'><i class="fab fa-linkedin icon_linkedin"></i></a>
                    </div>
                    <div className='col s12 m4 center-align'>
                        <i class="fab fa-whatsapp-square icon_whatsapp"></i>
                        <p>+55 11 98494 4825</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contatos