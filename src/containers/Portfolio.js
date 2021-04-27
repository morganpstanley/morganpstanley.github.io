import React, { Component } from 'react'

import './Portfolio.css'

import Project from './Project'

import * as PRO_BUILD from '../projects/pro_build'
import * as STOCKER from '../projects/stocker'
import * as CHESS_BATTERY from '../projects/chess_battery'
import arrow from "../assets/arrow.png"




class Portfolio extends Component {

    state = {
        mobile: false,
        showProject: false,
        stocker: false,
        pro_build: false,
        chess_battery: true
      }

      componentDidUpdate(props) {
        if(props.mobile === true) {
          this.setState({mobile: true});
        }
      }
    
    handleToggle = (e) => {
        let target = e.target.id
        if (target === 'stocker') {
          this.setState({
            showProject: true,
            stocker: true,
            pro_build: false,
            chess_battery:false
          })
      } else if (target === 'pro_build') {
        this.setState({
            showProject: true,
            stocker: false,
            pro_build: true,
            chess_battery: false
          })
      } else if(target === "chess_battery") {
        this.setState({
          showProject: true,
          stocker: false,
          pro_build: false,
          chess_battery: true
        })
      }
    }

    toggleScroll = () => {
        this.setState({
            showProject: !this.state.showProject
        })
    }

    render() {

        let arrowClasses = []
        if (this.state.showProject) {arrowClasses.push("up ")}
        if (!this.state.mobile) {arrowClasses.push("hidden")}

        return(
            <React.Fragment>
                <h1 className="page-header">Portfolio</h1>
                <div id="portfolio-body">
                {this.state.mobile ? <button id="project-title" onClick={this.toggleScroll}>Project</button> : <p id="project-title">Project</p>}
                <img src={arrow} alt="open menu arrow" id="arrow" className={arrowClasses.join('')}/>
                    <div id="project-names" className={this.state.showProject ? "hidden" : ""}>
                        <button className={`project-name ${this.state.chess_battery? "active" : ""}`} id="chess_battery" onClick={this.handleToggle}>chess_battery</button>
                        <button className={`project-name ${this.state.stocker? "active" : ""}`} id="stocker" onClick={this.handleToggle}>stocker</button>
                        <button className={`project-name ${this.state.pro_build? "active" : ""}`} id="pro_build" onClick={this.handleToggle}>pro_build</button>
                    </div>
                    {this.state.stocker ? 
                    <Project project={STOCKER} /> :
                    this.state.pro_build ?
                    <Project project={PRO_BUILD} /> :
                    <Project project={CHESS_BATTERY} />
                  }
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio