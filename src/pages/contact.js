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
      <div className="mt-4">
        <div className="navbar-top"></div>
        <div className="row margintop-std">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
