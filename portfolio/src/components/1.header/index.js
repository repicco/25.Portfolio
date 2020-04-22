import React, { Component } from 'react'
import './style.css'

import logo from '../../img/LogoRenatoPiccoBr.png'

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            btnstate: 'menu_hide',
            btnimage: "fas fa-chevron-circle-down",
        }
        this.alterabotao = this.alterabotao.bind(this)
    }

    alterabotao(){
        let state = this.state

        if(state.btnstate === 'menu_hide') {
            state.btnstate = 'menu_show'
            state.btnimage = "fas fa-minus-circle"
        } else {
            state.btnstate = 'menu_hide'
            state.btnimage = "fas fa-chevron-circle-down"
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
                            <button onClick={this.alterabotao} id='btn_menu' aria-label='botão de menu'><i id='btn_bar' className={this.state.btnimage}></i></button>
                        </div>
                        <nav id={this.state.btnstate} className='col m12 l8 offset-l1'>
                            <div className='nav-wrapper'>                        
                                <ul id='ul_btn' className='right'>
                                    <a href='#profile'><li className='btn btn_select'>Perfil</li></a>
                                    <a href='#portfolio'><li className='btn btn_select'>Portfolio</li></a>
                                    <a href='#contatos'><li className='btn btn_select'>Contatos</li></a>
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