import React, { Component } from 'react'
import './About.css'

class About extends Component {


    render() {
        return(
            <div className="about-page">
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