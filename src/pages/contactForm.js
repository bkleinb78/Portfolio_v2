import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mzblzpjy");
  if (state.succeeded) {
    return <h2>Message sent!</h2>;
  }
  return (
    <div
      id="contact"
      className="contact-form-wrapper d-flex justify-content-center"
    >
      <form onSubmit={handleSubmit} className="contact-form">
        <h5 className="text-white">Get in Touch</h5>
        <h2> Contact Me</h2>
        <p className="text-white description name-sm-contact-description">
          Feel free to reach out and send a message let's get in touch!
        </p>
        <div>
          <input
            type="text"
            className="form-control rounded border-white mb-3 form-input"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control rounded border-white mb-3 form-input"
            placeholder="Email Address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            className="form-control rounded border-white mb-3 form-text-area"
            rows="5"
            cols="30"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div>
          <input
            className="btn btn-primary"
            disabled={state.submitting}
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
