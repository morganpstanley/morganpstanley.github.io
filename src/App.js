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
    contactButton: false
  }

  handleToggle = (e) => {
    let target = e.target.id
    if (target === 'aboutButton') {
      this.setState({
        aboutButton: true,
        portfolioButton: false,
        contactButton: false
      })
  } else if (target === 'portfolioButton') {
      this.setState({
        aboutButton: false,
        portfolioButton: true,
        contactButton: false
      })
  } else if (target === 'contactButton') {
      this.setState({
        aboutButton: false,
        portfolioButton: false,
        contactButton: true
      })
    }
  }

  render() {
    return(
      <div className="App">
        <div id="header">
            <img src={sig} id="signature" alt="Morgan Stanley" />
            <div id="menu-bar">
                <button className="link" id="aboutButton" onClick={this.handleToggle}>About</button>
                <button className="link"  id="portfolioButton" onClick={this.handleToggle}>Portfolio</button>
                <button className="link"  id="contactButton" onClick={this.handleToggle}>Contact</button>
                <a className="link" href="https://medium.com/@morganpstanley">Blog⤤</a>
                <a className="link" href={resume} target="_blank" rel="noopener noreferrer">Resume⤤</a>
            </div>
        </div>
        <div className={`page ${this.state.aboutButton ? null : "hidden"}`} id="about">
          <div className="square">
            <h1 className="page-header" >Welcome.</h1>
            <p className="page-text">
                My name is Morgan P Stanley. I'm a software developer.
            </p>
          </div>
        </div>
        <div className={`page ${this.state.contactButton ? "" : "hidden"}`} id="contact">
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
