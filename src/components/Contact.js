import ContactForm from './ContactForm'
import './Contact.css'

const Contact = () => {

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

export default Contact