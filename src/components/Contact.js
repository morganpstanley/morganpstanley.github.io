import React, { Component } from 'react'
import ContactForm from './ContactForm'
import './Contact.css'

class Contact extends Component {

    render() {
        return(
            <div className="square">
                <h1 className="page-header font-playfair">Contact</h1>
                 <ContactForm />
            </div>
        )
    }
}

export default Contact