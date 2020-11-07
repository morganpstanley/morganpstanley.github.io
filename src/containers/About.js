import React, { Component } from 'react'
import './About.css'
import sig from '../assets/white-signature.png'

class About extends Component {


    render() {
        return(
            <div className="about-page">
                <div id="header">
                    <img src={sig} id="signature" />
                    <button class="link">About</button>
                    <button class="link">Portfolio</button>
                    <button class="link">Contact</button>
                    <button class="link">Blog</button>
                </div>
                <div id="about-text">
                    <h1 className="page-header" >Welcome.</h1>
                    <p className="page-text">
                        My name is Morgan P Stanley. I'm a software developer.
                    </p>
                </div>
            </div>
        )
    }
}

export default About