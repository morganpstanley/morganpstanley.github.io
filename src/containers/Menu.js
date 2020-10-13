import React, { Component } from 'react'
import './Menu.css'
import {Link} from "react-router-dom";

class Menu extends Component {


    render() {
        return(
        <menu className="menu">
                <div id="logo">
                    <img id="signature" src={process.env.PUBLIC_URL + '/white-signature.png'} alt="logo"></img>
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
            <div className="link" id="menu-blog">
                <Link to="/blog">Blog</Link>
            </div>
            <div className="link" id="menu-contact">
                <Link to="/contact">Contact</Link>
            </div>
            <div id="menu-symbol">
                ✤
            </div>
        </menu>
        )
    }
}

export default Menu