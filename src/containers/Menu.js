import React, { Component } from 'react'
import './Menu.css'
import {Link} from "react-router-dom";

class Menu extends Component {


    render() {
        return(
        <menu className="menu">
                <div id="logo">
                    MPS
                </div>
            <div className="link" id="menu-about">
                <Link to="/">Home</Link>
            </div>
            <div className="link" id="menu-portfolio">
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="link" id="menu-resume">
                <Link to="/resume">Resume</Link>
            </div>
            <div className="link" id="menu-contact">
                <Link to="/contact">Contact</Link>
            </div>
            <div id="menu-symbol">
                <img src={process.env.PUBLIC_URL + '/littlerocket.png'} alt="rocket"></img>
            </div>
        </menu>
        )
    }
}

export default Menu