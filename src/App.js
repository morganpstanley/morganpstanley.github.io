import React, { Component } from 'react'
import './App.css'
import Contact from "./containers/Contact.js"
import Portfolio from './containers/Portfolio'
import sig from './assets/website-signature.png'
import resume from './assets/software-developer-resume.pdf'

class App extends Component {

  state = {
    aboutButton: true,
    portfolioButton: false,
    contactButton: false,
    mobileMenuOpen: false
  }

  handleToggle = (e) => {
    let target = e.target.id
    if (target === 'aboutButton') {
      this.setState({
        aboutButton: true,
        portfolioButton: false,
        contactButton: false,
      })
  } else if (target === 'portfolioButton') {
      this.setState({
        aboutButton: false,
        portfolioButton: true,
        contactButton: false,
      })
  } else if (target === 'contactButton') {
      this.setState({
        aboutButton: false,
        portfolioButton: false,
        contactButton: true,
      })
    }
    if (this.state.mobileMenuOpen) {
        this.toggleMenu()
    }
  }

  toggleMenu = () => {
    this.setState({
        mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }

  render() {
    return(
      <div className="App">
        <div id="header">
            <img src={sig} id="signature" className={this.state.mobileMenuOpen ? "inverted" : null} alt="Morgan Stanley" />
            <button id="hamburger-icon" className={this.state.mobileMenuOpen ? "showClose" : null}onClick={this.toggleMenu}></button>
            <nav className={`navbar ${this.state.mobileMenuOpen ? "showNav" : null}`}>
                <button id="aboutButton" className="link" onClick={this.handleToggle}>About</button>
                <button id="portfolioButton" className="link" onClick={this.handleToggle}>Portfolio</button>
                <button id="contactButton" className="link" onClick={this.handleToggle}>Contact</button>
                <a className="link" href="https://medium.com/@morganpstanley">Blog⤤</a>
                <a className="link" href={resume} target="_blank" rel="noopener noreferrer">Resume⤤</a>
            </nav>
        </div>
        <div className={`page ${this.state.aboutButton && !this.state.mobileMenuOpen ? null : "hidden"}`} id="about">
          <div className="square">
            <h1 className="page-header" >Welcome.</h1>
            <p className="page-text">
                <span>My name is Morgan Stanley. </span><br />
                <span>I'm a software developer.</span>
            </p>
          </div>
        </div>
        <div className={`page ${this.state.contactButton && !this.state.mobileMenuOpen ? null : "hidden"}`} id="contact">
          <Contact />
        </div>
        <div className={`page ${this.state.portfolioButton ? null : "hidden"}`} id="portfolio">
          <Portfolio />
        </div>
      </div>
    )
  }
}

export default App;
