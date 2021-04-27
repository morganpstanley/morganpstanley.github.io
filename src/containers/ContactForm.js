import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    console.log(status)
    return (
      <form
        id="contact-form"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xknpzqqj"
        method="POST"
      >
            <fieldset id="fs-frm-inputs">
                {/* <label for="person-name">Name</label> */}
                <input type="text" name="name" id="person-name" placeholder="Name" required=""/> <br />
                {/* <label for="email-address">Email Address</label> */}
                <input type="email" name="_replyto" id="email-address" placeholder="Email Address" required="" /> <br />
                {/* <label for="message">Message</label> */}
                <textarea rows="5" name="message" id="message" placeholder="Message" />
            </fieldset>
            <input type="submit" value="Submit" />
        </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}