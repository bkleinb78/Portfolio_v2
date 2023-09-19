import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mzblzpjy");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="contact-form-wrapper d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="contact-form">
                <h5 className="title name-sm-contact">Contact us</h5>
                <p className="description name-sm-contact-description">Feel free to contact us if you need any assistance, any help or another question.
                </p>
                <div>
                    <input type="text" className="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <input type="email" className="form-control rounded border-white mb-3 form-input" placeholder="Email" required />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <textarea id="message" className="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
                </div>
                <div>
                    <input className="btn btn-primary" type="submit" value="Send" />
                </div>
            </form>
        </div>

    );
}

export default ContactForm;