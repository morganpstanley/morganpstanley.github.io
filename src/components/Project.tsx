import React from 'react'
import { Carousel } from "react-responsive-carousel";
import githubLogo from '../assets/github-icon.webp'

import "./Carousel.css"


type projectProps = {
    PROJECT_NAME: string;
    PROJECT_LINK?: string;
    PROJECT_LANGUAGES: string;
    PROJECT_BULLETS: string[];
    PROJECT_IMAGES: string[];
    GITHUB_LINK: string
}

const Project = ({ project }: any): JSX.Element => {

    const {PROJECT_NAME,
        PROJECT_LANGUAGES, 
        PROJECT_BULLETS, 
        PROJECT_IMAGES, 
        GITHUB_LINK,
        PROJECT_LINK,
     }: projectProps = project

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

    const showBullets = PROJECT_BULLETS.map((bullet: string, i: number) => <p key={i}>{bullet}</p>)

    const showImages = PROJECT_IMAGES.map((image: string, i: number) => 
        <img 
            loading="lazy"
            key={i} 
            src={image} 
            alt="Portfolio Project" 
        />)

    const showProjectName = (projectName: string, link: string | undefined) => {
        if (link) return (
            <a href={link} className="project-link font-playfair">{projectName}⤤</a>
        )
        return <span className="font-playfair">{projectName}</span>
    }

    return(
        <React.Fragment>
            <div key={PROJECT_NAME} id="project-overview">
                {showProjectName(PROJECT_NAME, PROJECT_LINK)}
                <a href={GITHUB_LINK}>
                    <img id="github-logo" src={githubLogo} height="22" width="22" alt="Github Link"/>
                </a>
                <p id="project-stack">{PROJECT_LANGUAGES}</p>
            </div>
            <div className="project-details">
                <Carousel {...getConfigurableProps()}>
                    {showImages}
                </Carousel>
                <div id="project-description">
                    {showBullets}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project