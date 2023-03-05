import React from "react";
import Navbar from "../components/navbar";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";

import "../App.css";

export default function home() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="navbar-top">
          <Navbar />
        </div>
        <div>
          <p className="name-sm">Hey There, My name is</p>
          <p className="name-cap">Brian Kleingerg</p>
          <p className="name-sm">Full Stack Developer</p>
          <div>
            <img src={Image2} className="about-image-home" />
            <img src={Image1} className="about-image-home" />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
