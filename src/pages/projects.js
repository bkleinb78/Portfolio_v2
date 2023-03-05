import React from 'react'
import Button from "react-bootstrap/Button";
import Navbar from "../components/navbar";

import '../App.css'

export default function projects() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="navbar-top">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="button" class="btn btn-primary">
              Projects
            </button>
          </div>
          <div className="col-md-6">
            <Button>projects</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
