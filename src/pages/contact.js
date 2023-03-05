import React from 'react'
import Button from "react-bootstrap/Button";
import Navbar from "../components/navbar";

import '../App.css'

export default function contact() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="navbar-top">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="button" class="btn btn-primary">
              Contact
            </button>
          </div>
          <div className="col-md-6">
            <Button>contact</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
