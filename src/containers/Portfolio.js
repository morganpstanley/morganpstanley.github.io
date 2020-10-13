import React, { Component } from 'react'
import './Portfolio.css'

class Portfolio extends Component {


    render() {
        return(
            <div className="portfolio-page">
                <h1 className="page-header">Portfolio</h1>
                <div id="portfolio-page-body">
                    <div className="portfolio-item">
                        <img id="stocker" src={process.env.PUBLIC_URL + '/stocker-sign-up.png'} alt="Stocker Portfolio Website"></img>
                    </div>
                    <div className="portfolio-item">
                    <img id="prolift" src={process.env.PUBLIC_URL + '/prolift.png'} alt="Prolift Portfolio Website"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio