import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {


    render() {
        return(
            <div className="menu">
                <div id="logo">
                    MPS
                </div>
                <div className="link" id="about">
                    About
                </div>
                <div className="link" id="portfolio">
                    Portfolio
                </div>
                <div className="link" id="resume">
                    Resume
                </div>
                <div className="link" id="contact-me">
                    Contact Me
                </div>
                <div id="menu-symbol">
                    <img src="/littletree.png" alt="tree"></img>
                </div>
            </div>
        )
    }
}

export default Menu