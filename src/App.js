import React, { useState } from 'react'
import './App.css'
import Contact from "./components/Contact.js"
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import About from './components/About'
import sig from './assets/website-signature.png'
import resume from './assets/morgan-stanley-software-developer-resume.pdf'

console.log('𝙇𝙞𝙫𝙚 𝙡𝙤𝙣𝙜 𝙖𝙣𝙙 𝙥𝙧𝙤𝙨𝙥𝙚𝙧. 🖖', 'Thanks for visiting.')

const App = () => {

    const [home, showHome] = useState(true)
    const [about, showAbout] = useState(false)
    const [portfolio, showPortfolio] = useState(false)
    const [contact, showContact] = useState(false)
    const [mobile, showMobile] = useState(false)

    const handleToggle = (e) => {
        let target = e.target.id
        console.log(target)
        showHome(false)
        showAbout(false)
        showPortfolio(false)
        showContact(false)
        if (target === 'home') showHome(true)
        if (target === 'about') showAbout(true)
        if (target === 'portfolio') showPortfolio(true)
        if (target === 'contact') showContact(true)
        if (mobile) toggleMenu()
    }

    const toggleMenu = () => {
        showMobile(!mobile)
    }

    return (
        <div className="App">
            <div id="header">
                <button id="signature" onClick={handleToggle}>
                    <img src={sig} id="home" className={mobile ? "inverted" : ''} alt="Morgan Stanley"/>
                </button>
                <button id="hamburger-icon" className={mobile ? "showClose" : ''} onClick={toggleMenu}></button>
                <nav className={`navbar ${mobile ? "showNav" : null}`}>
                    <button id="about" className={`link font-playfair ${about ? 'active' : ''}`} onClick={handleToggle}>About</button>
                    <button id="portfolio"className={`link font-playfair ${portfolio ? 'active' : ''}`} onClick={handleToggle}>Portfolio</button>
                    <button id="contact" className={`link font-playfair ${contact ? 'active' : ''}`} onClick={handleToggle}>Contact</button>
                    <a className="link font-playfair" href="https://medium.com/@morganpstanley">Blog⤤</a>
                    <a className="link font-playfair" href={resume} target="_blank" rel="noopener noreferrer">Resume⤤</a>
                </nav>
            </div>
            <div className={`page ${about && !mobile ? null : "hidden"}`} id="about-area">
                <About />
            </div>
            <div className={`page ${home && !mobile ? null : "hidden"}`} id="home-area">
                <Home />
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
