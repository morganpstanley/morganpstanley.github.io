import React from "react";
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
    const [state, handleSubmit] = useForm("xknpzqqj");
    if (state.succeeded) {
        return <p id="thanks" className="font-playfair">Thank you. I'll get back to you as soon as I can.</p>;
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form--input">
                <label htmlFor="name" className="font-playfair"> 
                    Name
                </label>

                <br />

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
                <label htmlFor="email" className="font-playfair" > 
                    Email
                </label>

                <br />

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
            <label htmlFor="message"  className="font-playfair"> 
                    Message
                </label>

                <br />

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

            <button type="submit" id="submit"  className="font-playfair" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm