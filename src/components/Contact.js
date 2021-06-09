import React, { Component } from 'react'
import ContactForm from './ContactForm'
import './Contact.css'

class Contact extends Component {

    render() {
        return(
            <div className="square">
                <h1 className="page-header font-playfair">Contact</h1>
                <ContactForm />
                <p className="page-text">
                    Or feel free to email me at 
                    <a href="mailto:morganpstanley@gmail.com" className="font-playfair">morganpstanley@gmail.com</a>
                </p>
            </div>
        )
    }
}

export default Contact