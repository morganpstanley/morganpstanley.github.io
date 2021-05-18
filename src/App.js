import React, { useState, useEffect} from 'react'
import './App.css'
import Contact from "./containers/Contact.js"
import Portfolio from './containers/Portfolio'
import sig from './assets/website-signature.png'
import resume from './assets/software-developer-resume.pdf'

const App = () => {

    useEffect(() => {
        console.log('𝙇𝙞𝙫𝙚 𝙡𝙤𝙣𝙜 𝙖𝙣𝙙 𝙥𝙧𝙤𝙨𝙥𝙚𝙧. 🖖', 'Thanks for visiting.')
    },[])

    const [about, showAbout] = useState(true)
    const [portfolio, showPortfolio] = useState(false)
    const [contact, showContact] = useState(false)
    const [mobile, showMobile] = useState(false)

    const handleToggle = (e) => {
        let target = e.target.id
        if (target === 'about') {
            showAbout(true)
            showPortfolio(false)
            showContact(false)
        } else if (target === 'portfolio') {
            showAbout(false)
            showPortfolio(true)
            showContact(false)
        } else if (target === 'contact') {
            showAbout(false)
            showPortfolio(false)
            showContact(true)
        }
        if (mobile) {
            toggleMenu()
        }
    }

    const toggleMenu = () => {
        showMobile(!mobile)
    }

    return (
        <div className="App">
            <div id="header">
                <img src={sig} id="signature" className={mobile ? "inverted" : null} alt="Morgan Stanley" />
                <button id="hamburger-icon" className={mobile ? "showClose" : null} onClick={toggleMenu}></button>
                <nav className={`navbar ${mobile ? "showNav" : null}`}>
                    <button id="about" className="link" onClick={handleToggle}>About</button>
                    <button id="portfolio" className="link" onClick={handleToggle}>Portfolio</button>
                    <button id="contact" className="link" onClick={handleToggle}>Contact</button>
                    <a className="link" href="https://medium.com/@morganpstanley">Blog⤤</a>
                    <a className="link" href={resume} target="_blank" rel="noopener noreferrer">Resume⤤</a>
                </nav>
            </div>
            <div className={`page ${about && !mobile ? null : "hidden"}`} id="about">
                <div className="square">
                    <h1 className="page-header" >Welcome.</h1>
                    <p className="page-text">
                        <span>My name is Morgan Stanley. </span> 
                        <br />
                        <span>I'm a software developer.</span>
                    </p>
                </div>
            </div>
            <div className={`page ${contact && !mobile ? null : "hidden"}`} id="contact-area">
                <Contact />
            </div>
            <div className={`page ${portfolio ? null : "hidden"}`} id="portfolio-area">
                <Portfolio />
            </div>
        </div>
    )
}

export default App;
