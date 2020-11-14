import React, { Component } from 'react'

import './Portfolio.css'

import Project from './Project'

import * as PRO_BUILD from '../projects/pro_build'
import * as STOCKER from '../projects/stocker'




class Portfolio extends Component {

    state = {
        stocker: true,
        pro_build: false
      }
    
    handleToggle = (e) => {
        let target = e.target.id
        if (target === 'stocker') {
          this.setState({
            stocker: true,
            pro_build: false
          })
      } else if (target === 'pro_build') {
        this.setState({
            stocker: false,
            pro_build: true
          })
      }
      console.log('state: ', this.state)
    }

    render() {
        return(
            <React.Fragment>
                <h1 className="page-header">Portfolio</h1>
                <div id="portfolio-body">
                <p id="project-title">Project</p>
                    <div id="project-names">
                        <button className="project-name" id="stocker" onClick={this.handleToggle}>stocker</button>
                        <button className="project-name" id="pro_build" onClick={this.handleToggle}>pro_build</button>
                    </div>
                    {this.state.stocker ? 
                    <Project project={PRO_BUILD} /> :
                    <Project project={STOCKER} />}
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio