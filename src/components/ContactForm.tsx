import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {
    // const { useForm: useForm, ValidationError: ValidationError } = await import('@formspree/react');
    const [state, handleSubmit] = useForm("xknpzqqj");
    
    if (state.succeeded) {
        return <p id="thank-you-message" className="font-playfair">Thank you. I'll get back to you as soon as I can.</p>;
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form--input" id="form--name">
                <label htmlFor="name" className="font-playfair"> 
                    Name
                </label>

                <br />

                <input
                    id="name"
                    type="name"
                    name="name"
                    required
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>

            <div className="form--input" id="form--email">
                <label htmlFor="email" className="font-playfair" > 
                    Email
                </label>

                <br />

                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className="form--input" id="form--message">
                <label htmlFor="message"  className="font-playfair"> 
                    Message
                </label>

                <br />

                <textarea
                    id="message"
                    name="message"
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button type="submit" className="font-playfair" id="form--submit" disabled={state.submitting}>
                Submit
            </button>

            <p className="page-text" id="contact--info">
                Or feel free to email me at 
                <a href="mailto:morganpstanley@gmail.com" className="font-playfair">morganpstanley@gmail.com</a>
            </p>
        </form>
    );
}

export default ContactForm