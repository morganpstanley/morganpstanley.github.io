import React, { Component } from 'react'
import './App.css'
import Contact from "./containers/Contact.js"
import Portfolio from './containers/Portfolio'
import sig from './assets/website-signature.png'

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
          <img src={sig} id="signature" alt="signature" />
          <button className="link" id="aboutButton" onClick={this.handleToggle}>About</button>
          <button className="link"  id="portfolioButton" onClick={this.handleToggle}>Portfolio</button>
          <button className="link"  id="contactButton" onClick={this.handleToggle}>Contact</button>
          <a className="link" href="https://medium.com/@morganpstanley">Blog⤤</a>
          <a className="link" href="https://docs.google.com/document/d/e/2PACX-1vRz0REkDGRXf_f5P_VgXC_jD8hGxeFZWm10WVxKCrY_C0qh7iZbQhim0cIslSFvV3mfAzqrGdsq2ZET/pub">Resume⤤</a>
        </div>
        <div className={`page ${this.state.aboutButton ? null : "hidden"}`} id="about">
          <h1 className="page-header" >Welcome.</h1>
          <p className="page-text">
              My name is Morgan P Stanley. I'm a software developer.
          </p>
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
