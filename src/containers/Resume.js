import React, { Component } from 'react'
import './Resume.css'

class Resume extends Component {


    render() {
        return(
            <div className="resume-page">
                <h1 className="page-header" > Resume </h1>
                <p className="page-text">
                    <a id="linkto-resume" href="https://docs.google.com/document/d/e/2PACX-1vRz0REkDGRXf_f5P_VgXC_jD8hGxeFZWm10WVxKCrY_C0qh7iZbQhim0cIslSFvV3mfAzqrGdsq2ZET/pub">Click here to view my resume.</a>
                </p>
            </div>
        )
    }
}

export default Resume