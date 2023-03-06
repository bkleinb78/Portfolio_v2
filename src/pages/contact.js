import React from "react";
import Navbar from "../components/navbar";
import Button from "react-bootstrap/Button";


import "../App.css";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

export default function contact() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="navbar-top">
          <Navbar />
        </div>
        <div className="row margintop-std">
          <div className="col-md-6">
            <p className="name-sm-contact">Email</p>
          </div>
          <div className="col-md-6 name-sm-contact">
            <Mailto email="kleinbergbrian.dev@gmail.com" subject="Hello" body="Hello Brian!" obfuscate={true}>
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
            <p className="name-sm-contact"><Button variant="primary">Browse Resume</Button></p>
          </div>
        </div>
      </div>
    </div>
  );
}
