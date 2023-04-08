import ContactForm from "./ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-area">
      <div className="square">
        <h1 className="page-header font-playfair">Contact</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
