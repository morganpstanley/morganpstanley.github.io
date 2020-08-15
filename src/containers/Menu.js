import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {


    render() {
        return(
            <div className="menu">
                <div id="logo">
                    MPS
                </div>
                <div className="link" id="menu-about">
                    About
                </div>
                <div className="link" id="menu-portfolio">
                    Portfolio
                </div>
                <div className="link" id="menu-resume">
                    Resume
                </div>
                <div className="link" id="menu-contact-me">
                    Contact Me
                </div>
                <div id="menu-symbol">
                    <img src="/littlerocket.png" alt="rocket"></img>
                </div>
            </div>
        )
    }
}

export default Menu