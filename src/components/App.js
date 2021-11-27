import { useState } from 'react'
import './App.css'
import Contact from "./Contact"
import Portfolio from './Portfolio'
import About from './About'
import sig from '../assets/website-signature.webp'
const RESUME = "https://docs.google.com/document/d/e/2PACX-1vRz0REkDGRXf_f5P_VgXC_jD8hGxeFZWm10WVxKCrY_C0qh7iZbQhim0cIslSFvV3mfAzqrGdsq2ZET/pub"

console.log('𝙇𝙞𝙫𝙚 𝙡𝙤𝙣𝙜 𝙖𝙣𝙙 𝙥𝙧𝙤𝙨𝙥𝙚𝙧. 🖖', 'Thanks for visiting.')

const App = () => {

    const [about, showAbout] = useState(true)
    const [portfolio, showPortfolio] = useState(false)
    const [contact, showContact] = useState(false)
    const [mobile, showMobile] = useState(false)

    const handleToggle = (e) => {
        let target = e.target.id
        showAbout(false)
        showPortfolio(false)
        showContact(false)
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
                    <img src={sig} id="signature" className={mobile ? "inverted" : ''} alt="Morgan Stanley"/>
                <button id="hamburger-icon" className={mobile ? "showClose" : ''} aria-label="mobile menu" onClick={toggleMenu}></button>
                <nav className={`navbar ${mobile ? "showNav" : null}`}>
                    <button id="about" className={`link font-playfair ${about ? 'active' : ''}`} onClick={handleToggle}>About</button>
                    <button id="portfolio"className={`link font-playfair ${portfolio ? 'active' : ''}`} onClick={handleToggle}>Portfolio</button>
                    <button id="contact" className={`link font-playfair ${contact ? 'active' : ''}`} onClick={handleToggle}>Contact</button>
                    <a className="link font-playfair" href="https://medium.com/@morganpstanley">Blog⤤</a>
                    <a className="link font-playfair" href={RESUME} target="_blank" rel="noopener noreferrer">Resume⤤</a>
                </nav>
            </div>
            <div className={`page ${about && !mobile ? null : "hidden"}`} id="about-area">
                <About />
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
