import React from "react";
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
    const [state, handleSubmit] = useForm("xknpzqqj");
    if (state.succeeded) {
        return <p id="thanks">Thank you. I'll get back to you as soon as I can.</p>;
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form--input">
                <label htmlFor="name"> 
                    Name
                </label>
                <input
                    id="name"
                    type="name"
                    name="name"
                    required="required"
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>

            <div className="form--input">
                <label htmlFor="email"> 
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required="required"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className="form--input">
            <label htmlFor="message"> 
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required="required"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button type="submit" id="submit" disabled={state.submitting}>
                Submit
            </button>

            <br />

            <p className="page-text">
                Or feel free to email me at <br />
                <a href="mailto:morganpstanley@gmail.com" >morganpstanley@gmail.com</a>
            </p>
        </form>
    );
}

export default ContactForm