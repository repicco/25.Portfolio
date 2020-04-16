
import React, { Component } from 'react'
import logo from '../../img/LogoRenatoPiccoBr.png'

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            btnstate: 'menu_hide',
        }
        this.alterabotao = this.alterabotao.bind(this)
    }

    alterabotao(){
        let state = this.state

        if(state.btnstate === 'menu_hide') {
            state.btnstate = 'menu_show'
        } else {
            state.btnstate = 'menu_hide'
        }
        
        this.setState(state)
    }

    render(){
        return (
            <div id='header' className='row bgheader'>
                <div className='container'>
                    <div id='header_row' className='row'>
                        <div className='col s5 m3 brand-logo'>
                            <img alt='logo' className='img_logo responsive-img' src={logo}></img>
                        </div>
                        <div id='div_btnmenu' className='col s1 offset-s4 offset-m6 btn_menu'>
                            <button onClick={this.alterabotao} id='btn_menu'>&#9776;</button>
                        </div>
                        <nav id={this.state.btnstate} className='col m12 l8 offset-l1'>
                            <div className='nav-wrapper'>                        
                                <ul id='ul_btn' className='right'>
                                    <li className='btn'><a href='/'>Perfil</a></li>
                                    <li className='btn'><a href='#portfolio'>Portfolio</a></li>
                                    <li className='btn'><a href='#contatos'>Contatos</a></li>
                                </ul>
                            </div>
                        </nav>
    
                    </div>
                </div>
            </div>
        )
    }
}

export default Header