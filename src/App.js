import React, { Component } from 'react'
import './App.css'
import Contact from "./containers/Contact.js"
import Portfolio from './containers/Portfolio'
import sig from './assets/website-signature.png'
import resume from './assets/software-developer-resume.pdf'
import testx from './assets/testt.png'

class App extends Component {

  state = {
    aboutButton: true,
    portfolioButton: false,
    contactButton: false,
    mobileMenuOpen: false
  }

  componentDidMount() {
    this.blah()
  }

  blah() {
    setTimeout(() => document.getElementById("line").classList.add("long"), 2000);
    setTimeout(() => document.getElementById("morgan").classList.add("appear"), 200);
    setTimeout(() => document.getElementById("stanley").classList.add("appear"), 700);
    setTimeout(() => document.getElementById("portfolio1").classList.add("appear"), 4900);
    setTimeout(() => document.getElementById("contact1").classList.add("appear"), 4500);
    setTimeout(() => document.getElementById("about").classList.add("appear"), 3700);
    setTimeout(() => document.getElementById("blog1").classList.add("appear"), 3300);
    setTimeout(() => document.getElementById("resume1").classList.add("appear"), 4100);
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

  handlePort() {
    document.getElementById("container").classList.add("move-up");
    document.getElementById("portfolio1").classList.add("move-up");
  }

  render() {
    return(
      <div className="App">
        {/* <img src={testx} alt="logo" id='website'/> */}
        {/* <div id="logo-box"> */}
        <div id="container">
          <div id='morgan'>MORGAN</div>
          <div id='stanley'>STA LEY</div>
          <hr id='line' />
          <div id='blog1'>BLOG</div>
          <div id='about'>ABOUT</div>
          <div id='resume1'>RESUME</div>
          <div id='contact1'>CONTACT</div>
          <div id='portfolio1' onClick={this.handlePort}>PORTFOLIO</div>
        </div>
        {/* </div>
         <div id="header">
          <div id="logo-circle">
            <img src={sig} id="signature" className={this.state.mobileMenuOpen ? "inverted" : null} alt="Morgan Stanley" />
          </div>
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
        <div className={`page ${this.state.portfolioButton  && !this.state.mobileMenuOpen ? null : "hidden"}`} id="portfolio">
          <Portfolio mobile={this.state.mobileMenuOpen} />
        </div> */}
      </div>
    )
  }
}

export default App;
