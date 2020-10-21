import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";

import "/Users/Morgan/Development/morganpstanley.github.io/node_modules/react-responsive-carousel/lib/styles/carousel.css"
import './Portfolio.css'

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
                                <img id="prolift" class="active" src={process.env.PUBLIC_URL + '/stocker-home.png'} alt="Stocker Portfolio Project"></img>
                            </div>
                            <div>
                                <img id="prolift" src={process.env.PUBLIC_URL + '/stocker-signup.png'} alt="Stocker Portfolio Project"></img>
                            </div>
                            <div>
                                <img id="prolift" src={process.env.PUBLIC_URL + '/stocker-signin.png'} alt="Stocker Portfolio Project"></img>
                            </div>
                        </Carousel>
                    </div>
                    <div class="description">
                        <p class="project-name description">Stocker</p>
                        <p class="description">React + Redux | Ruby on Rails | HTML + CSS</p>
                    </div>
                    <div className="portfolio-item">
                        <Carousel {...getConfigurableProps()}>
                            <div>
                                <img id="prolift" src={process.env.PUBLIC_URL + '/prolift-1.png'} alt="Prolift Portfolio Project"></img>
                            </div>
                            <div>
                                <img id="prolift" src={process.env.PUBLIC_URL + '/prolift-2.png'} alt="Prolift Portfolio Project"></img>
                            </div>
                            <div>
                            <img id="prolift" src={process.env.PUBLIC_URL + '/prolift-3.png'} alt="Prolift Portfolio Project"></img>
                            </div>
                        </Carousel>
                    </div>
                    <div class="description">
                        <p class="project-name description">Prolift</p>
                        <p class="description">JavaScript | Ruby on Rails | HTML + CSS</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio