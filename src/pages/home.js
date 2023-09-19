import React from "react";
import Navbar from "../components/navbar";

import Image from "../assets/main.jpg";

import "../App.css";
import "./home.css"

export default function home() {
  return (
    <div id="home" className="App">
      <div className="main-div">
        <div className="navbar-top">
          <Navbar />
        </div>
        <div>
          <p className="name-sm">Hello I'm</p>
          <p className="name-cap">Brian Kleinberg</p>
          <p className="name-sm">I'm a Full Stack Developer</p>
          <div>
            <img src={Image} className="about-image-home" />
          </div>
          <div>
          <div className="btn-container">
            <button style={{marginRight: "10px"}} className="btn btn-color-2" onClick="window.open()">
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick="location.href'./contact'"
            >
              Contact Info
            </button>
          </div>
            <a href="https://linkedin.com/in/brian-kleinberg-7066b61a">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///+Hh4fs7Ozm5uadnZ2Ojo6EhIR5eXmrq6uTk5Ph4eGIiIikpKR8fHzw8PD5+fnIyMjPz8/V1dW2tra+vr5sbGxQUFAWFhYxMTEpKSnCwsJlZWWlpaU/Pz9JSUkgICA4ODhYWFhycnIlJSVAQECBfPBeAAAD1klEQVR4nO2da1vCMAxGqTBhVETGxQuggvr//6KiIOguyWhC1j3v+UxdzjPWdmmCnQ4AAAAAAAAAAAAAAAAAAAAAAAAAALDi/S2d+F6357N08GQdjAJD707xN9YBCZO6PIl1UIIs7goEnRu/WAcmxajQb8ebdWgyzEsFnbu1Dk6CokfwyMo6vHAWlYLOPVgHGEzxJHNkYh1gKNXf0R331iEGQgq6zDrEMPq0oXu1DjKIjGHYtw4yCGqe2RH1XLNhCLqxdZQhrDiGzjrKEG5ZhjEv+pyp1LlH6zADGLAMX63DDGDLMrSOMoRHjuCddZRBjBmGcW/blgzDoXWQQbwxDCPPLLb9S9rpDEnD6BNu1FyztA4wmPtqwbiXih+SSsPYcxjfVKVqFtbByVB+F7fWoUmxLZ5uslfrwARJ8ukM35obuKc//eM3b5vfN6tknk2n2STtb6xDAQAAAAAAQI3nwXA2mXrvv/a+y3X/2ToeWT6Sae79zPVmF8gh3I8SgvyYFTXm+t+Ax1F5Ri/Trp27Kb30gfyY8kq/Pd0/H38hyiHuUtUj2KszDKuzc1/0Tj78NCGv4NysYYZknvzEkLzfe/RKknUN3z310V+81lm6qiGv1OPAID5DXqXHkXVjDK95hrxCj1PmcRnWvYM7NA661AzrPYMHFO6iliGryqMA+SYPLcPumYbyp11KhlUdDrWv10BDz6u1KmYahSGnEKkU4ZeNcwzp95EghEsHGmgoPJ+eY0iPCaT9hqPWG4o+iecY1t9S10WyKbCZhpJrYjMNJSs+G2oouGBcwtDP0yRZzzynBekwJCLD5cnLwnbGHvYei2Eu2Ut3dP4gl5ZSNex+5AdveLtyuRyxpmFJhXiPM7ZXPPZChswcU2nOhXUXTQ153VLljZmsHI5Y5aCaYTc/7hfyaMcJ9uaqGVYeQzBWRrGpRsuwelNCd3nIdR8rGVLvP/RfEJtMlQz/n3P/hz42FeuvVjKkLstYcJptSD5ET7Sh1AuUzopPT/X0qi9Va65jSBcD0Q+iVM+cjiF9XXrRl9rUqBgycmX07l3qEErFsGrHtoc+u5F6Q1QxZKzWG/K6UhtTK8OH1hvS+zYYahqS8yAMYQhDGMKQNCTHwLDxhmS1CQxhaG7IrIKGIQxhCEMYwhCGMIShqWGdHlIYwhCGMIQhDGEIw6Ya1vrlDxjCEIYwhCEMW2pI/vYTDGFobriGYfSGZB8oDGEIQ3VDsucchjAUNTznN2gvY3glZHg77hLkx6TEmDHnx1eoy45b8Y/rAQAAAAAAAAAAAAAAAAAAAAAAAADi4ROq8EbESHvjyAAAAABJRU5ErkJggg=="
                className="image-icon"
              />
            </a>
            <a href="https://github.com/bkleinb78">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU"
                className="image-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
