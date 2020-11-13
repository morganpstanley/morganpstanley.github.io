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
import githubLogo from '../assets/github-logo-icon.png'




class Portfolio extends Component {

    state = {
        Stocker: true,
        pro_build: false
      }
    
    handleToggle = (e) => {
        console.log(e.target.id)
        let target = e.target.id
        if (target === 'Stocker') {
          this.setState({
            Stocker: true,
            pro_build: false
          })
      } else if (target === 'pro_build') {
        this.setState({
            Stocker: false,
            pro_build: true
          })
      }
    }

    render() {

        const getConfigurableProps = () => ({
            showArrows: true,
            showStatus: false,
            showIndicators: false,
            infiniteLoop: true,
            showThumbs: true,
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
            <React.Fragment>
                <h1 className="page-header">Portfolio</h1>
                <div id="portfolio-body">
                <p id="project-title">Project</p>
                    <div id="project-names">
                        <button className="project-name" id="Stocker" onClick={this.handleToggle}>stocker</button>
                        <button className="project-name" id="pro_build" onClick={this.handleToggle}>pro_build</button>
                    </div>
                    <div id="project-description">
                    <span>{this.state.Stocker ? "Stocker" : "Pro Build"}</span>
                    <a href={this.state.Stocker ? "https://github.com/morganpstanley/stocker" : "https://github.com/morganpstanley/pro_lift"}><img id="github-logo" src={githubLogo}></img></a>
                    <p className="description">React + Redux | Ruby on Rails | HTML + CSS</p>
                    </div>
                    <div className={`portfolio-item ${this.state.Stocker ? "" : "hidden"}`}>
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
                        <div className="description">
                            <p className="project">Stocker</p>
                        </div>
                    </div>
                    <div className={`portfolio-item ${this.state.pro_build ? "" : "hidden"}`}>
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
                        <div className="description">
                            <div className="bullets">
                                <p>Connected to Finnhub Stock API and uses a Websocket to keep stock prices up-to-date</p>
                                <p>Allows users to input a buy price to track the gain/loss of their investments and their portfolio as a whole</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio