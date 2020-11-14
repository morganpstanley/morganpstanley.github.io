import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {

    state = {
        email: "morganpstanley@gmail.com",
        link: "mailto:morganpstanley@gmail.com"
    }

    email = () => {
        return this.state.email
    }


    render() {
        return(
            <div className="square">
                <h1 className="page-header" > Contact </h1>
                <p className="page-text">
                    Feel free to email at <a href={this.state.link}>{this.state.email} </a>
                </p>
            </div>
        )
    }
}

export default Contact