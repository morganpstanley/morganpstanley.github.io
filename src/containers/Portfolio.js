import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";

import "./Carousel.css"
import './Portfolio.css'
import prolift1 from '../assets/prolift-1.png'
import prolift2 from '../assets/prolift-2.png'
import prolift3 from '../assets/prolift-3.png'
import stocker1 from '../assets/stocker-home.png'
import stocker2 from '../assets/stocker-signup.png'
import stocker3 from '../assets/stocker-signin.png'



class Portfolio extends Component {

    render() {

        const getConfigurableProps = () => ({
            showArrows: true,
            showStatus: false,
            showIndicators: false,
            infiniteLoop: true,
            showThumbs: false,
            useKeyboardArrows: true,
            autoPlay: false,
            stopOnHover: false,
            swipeable: true,
            dynamicHeight: false,
            emulateTouch: true,
            interval: 3000,
            transitionTime: 200,
        });

        return(
            <div className="portfolio-page">
                <h1 className="page-header">Portfolio</h1>
                <div id="portfolio-page-body">
                    <div className="portfolio-item">
                        <Carousel {...getConfigurableProps()}>
                            <div>
                                <img id="prolift" className="active" src={stocker1} alt="Stocker Portfolio Project"></img>
                            </div>
                            <div>
                                <img id="prolift" src={stocker2} alt="Stocker Portfolio Project"></img>
                            </div>
                            <div>
                                <img id="prolift" src={stocker3} alt="Stocker Portfolio Project"></img>
                            </div>
                        </Carousel>
                    </div>
                    <div className="description">
                        <p className="project-name description">Stocker</p>
                        <p className="description">React + Redux | Ruby on Rails | HTML + CSS</p>
                    </div>
                    <div className="portfolio-item">
                        <Carousel {...getConfigurableProps()}>
                            <div>
                                <img id="prolift" src={prolift1} alt="Prolift Portfolio Project"></img>
                            </div>
                            <div>
                                <img id="prolift" src={prolift2} alt="Prolift Portfolio Project"></img>
                            </div>
                            <div>
                                <img id="prolift" src={prolift3} alt="Prolift Portfolio Project"></img>
                            </div>
                        </Carousel>
                    </div>
                    <div className="description">
                        <p className="project-name description">Prolift</p>
                        <p className="description">JavaScript | Ruby on Rails | HTML + CSS</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio