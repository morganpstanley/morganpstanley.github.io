import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";
import githubLogo from '../assets/github-logo-icon.png'

import "./Carousel.css"

class Project extends Component {

    render() {
        const {PROJECT_NAME,
            PROJECT_LINK, 
            PROJECT_LANGUAGES, 
            PROJECT_BULLETS, 
            PROJECT_IMAGES, 
            GITHUB_LINK
        } = this.props.project

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
            <div className="project">
                <div key={PROJECT_NAME} id="project-description">
                    <span>{PROJECT_LINK ? <a href={PROJECT_LINK}>{PROJECT_NAME}</a> : PROJECT_NAME}</span>
                    <a href={GITHUB_LINK}><img id="github-logo" src={githubLogo} alt="Github Link"></img></a>
                    <p className="description">{PROJECT_LANGUAGES}</p>
                </div>
                <div className="portfolio-item">
                    <Carousel {...getConfigurableProps()}>
                        <div>
                            <img id="prolift" src={PROJECT_IMAGES[0]} alt="Prolift Portfolio Project"></img>
                        </div>
                        <div>
                            <img id="prolift" src={PROJECT_IMAGES[1]} alt="Prolift Portfolio Project"></img>
                        </div>
                        <div>
                            <img id="prolift" src={PROJECT_IMAGES[2]} alt="Prolift Portfolio Project"></img>
                        </div>
                    </Carousel>
                    <div className="description">
                        <div className="bullets">
                            <p>{PROJECT_BULLETS[0]}</p>
                            <p>{PROJECT_BULLETS[1]}</p>
                            <p>{PROJECT_BULLETS[2]}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project