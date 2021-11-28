import React from 'react'
import { Carousel } from "react-responsive-carousel";
import githubLogo from '../assets/github-logo-icon.webp'

import "./Carousel.css"

const Project = ({project}) => {

    const {PROJECT_NAME,
        PROJECT_LINK, 
        PROJECT_LANGUAGES, 
        PROJECT_BULLETS, 
        PROJECT_IMAGES, 
        GITHUB_LINK
    } = project

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

    const showBullets = PROJECT_BULLETS.map((bullet, i) => <p key={i}>{bullet}</p>)

    const showImages = PROJECT_IMAGES.map((image, i) => 
        <img 
            loading="lazy"
            key={i} 
            src={image} 
            alt="Portfolio Project" 
        />)

    const showProjectName = (projectName, link = null) => {
        if (link) return (
            <a href={link} className="project-link font-playfair">{projectName}⤤</a>
        )
        return <span className="font-playfair">{projectName}</span>
    }

    return(
        <React.Fragment>
            <div key={PROJECT_NAME} id="project-description">
            {showProjectName(PROJECT_NAME, PROJECT_LINK)}
            <a href={GITHUB_LINK}><img id="github-logo" src={githubLogo} alt="Github Link"></img></a>
            <p className="description">{PROJECT_LANGUAGES}</p>
            </div>
            <div className="portfolio-item">
                <Carousel {...getConfigurableProps()}>
                    {showImages}
                </Carousel>
                <div className="description">
                    <div className="bullets">
                        {showBullets}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project