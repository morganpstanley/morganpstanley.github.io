import React, { Component } from 'react'
import ContactForm from './ContactForm'
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
                 <ContactForm />
            </div>
        )
    }
}

export default Contact