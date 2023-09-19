import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import Resume from "../assets/1.pdf";
import ContactForm from "./contactForm";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

export default function contact() {
  return (
    <div id="#contact" className="App">
      <div className="main-div">
        <div className="navbar-top"></div>
        <div className="row margintop-std">
          <div className="col-md-6">
            <p className="name-sm-contact">Email</p>
          </div>
          <div className="col-md-6 name-sm-contact">
            <Mailto
              email="kleinbergbrian.dev@gmail.com"
              subject="Hello"
              body="Hello Brian!"
              obfuscate={true}
            >
              kleinbergbrian.dev@gmail.com
            </Mailto>
          </div>
        </div>
        <div className="row margintop-std">
          <div className="col-md-6">
            <p className="name-sm-contact">Phone</p>
            <p className="name-sm-contact">Linkedin</p>
            <p className="name-sm-contact">Github</p>
            <p className="name-sm-contact">Resume</p>
          </div>
          <div className="col-md-6 name-sm-contact">
            <p className="name-sm-contact">+18474566702</p>
            <p className="name-sm-contact">https://linkedin.com/xxx</p>
            <p className="name-sm-contact">https://github.com/bkleinb78</p>
            <p className="name-sm-contact">
              <Button variant="primary" style={{ width: 'fit-content' }}>
                <a
                  href={Resume}
                  target="_blank"
                  style={{ fontSize: "2.5vw", color: "white" }} rel="noreferrer"
                >
                  Browse Resume
                </a>
              </Button>
            </p>
          </div>
        </div>

        <div className="row margintop-std">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}
