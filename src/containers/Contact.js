import React, { Component } from 'react'

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
            <div className="contact-page">
                <h1 className="page-header" > Contact </h1>
                <p className="page-text">
                    <p>If you'd like to contact me, please feel free to email at the address below.</p>
                    <a href={this.state.link}>{this.state.email} </a>
                </p>
            </div>
        )
    }
}

export default Contact