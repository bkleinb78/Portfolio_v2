import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../components/navbar";

import Image1 from "../assets/image1.jpg";

import "../App.css";

export default function projects() {
  return (
    <div className="App">
      <div className="main-div">
        <div className="navbar-top">
          <Navbar />
        </div>
        <div className="row inline-project">
          <div className="col-md-3 project-layout">
            <img src={Image1} style={{ width: "100%", height: "36vh", borderRadius: "15px" }} />

            <p className="project-title">
              Capstone
            </p>

            <div className="icon-layout-project">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFfuWnYhXb8yRH_vqFAcZ379xGKZtdiAZxA&usqp=CAU"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECfdTqlVrG03aR41yIfxUuQb1IgLN-TzsQ&usqp=CAU"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU"
                className="project-icon"
              />
              <div className="btn-container">
              <a href="https://google.com">
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>Source Code</a></Button>
              </a>
              <a href="https://google.com" style={{ marginLeft: "20px" }}>
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>View</a></Button>
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 project-layout">
          
            <img src={Image1} style={{ width: "100%", height: "36vh", borderRadius: "15px" }} />

            <p className="project-title">
              Shopify
            </p>

            <div className="icon-layout-project">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydIjxrWKyjuXD8bKC4CUEH4SqU0wg98qPIQ&usqp=CAU"
                className="project-icon"
              />

              <img
                src="data:image/png;base64,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"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU"
                className="project-icon"
              />
               <div className="btn-container">
              <a href="https://google.com">
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>Source Code</a></Button>
              </a>
              <a href="https://google.com" style={{ marginLeft: "20px" }}>
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>View</a></Button>
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 project-layout">
            <img src={Image1} style={{ width: "100%", height: "36vh", borderRadius: "15px" }} />
            <p className="project-title">
              Ecommerce
            </p>
            <div className="icon-layout-project">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFfuWnYhXb8yRH_vqFAcZ379xGKZtdiAZxA&usqp=CAU"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSG9JjvKmjE5ctGuwizZohnaEAWz2yKp1bg&usqp=CAU"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU"
                className="project-icon"
              />
                        <div className="btn-container">
              <a href="https://google.com">
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>Source Code</a></Button>
              </a>
              <a href="https://google.com" style={{ marginLeft: "20px" }}>
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>View</a></Button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row inline-project">
          <div className="col-md-3 project-layout">
           
            <img src={Image1} style={{ width: "100%", height: "36vh", borderRadius: "15px" }} />

            <p className="project-title">
              React
            </p>

            <div className="icon-layout-project">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFfuWnYhXb8yRH_vqFAcZ379xGKZtdiAZxA&usqp=CAU"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECfdTqlVrG03aR41yIfxUuQb1IgLN-TzsQ&usqp=CAU"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU"
                className="project-icon"
              />
              <div className="btn-container">
              <a href="https://google.com">
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>Source Code</a></Button>
              </a>
              <a href="https://google.com" style={{ marginLeft: "20px" }}>
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>View</a></Button>
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 project-layout">
            <img src={Image1} style={{ width: "100%", height: "36vh", borderRadius: "15px" }} />

            <p className="project-title">
              Mobile
            </p>

            <div className="icon-layout-project">
              <img
                src="data:image/png;base64,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"
                className="project-icon"
              />

              <img
                src="data:image/png;base64,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"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU"
                className="project-icon"
              />
              <div className="btn-container">
              <a href="https://google.com">
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>Source Code</a></Button>
              </a>
              <a href="https://google.com" style={{ marginLeft: "20px" }}>
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>View</a></Button>
              </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 project-layout">
            <img src={Image1} style={{ width: "100%", height: "36vh", borderRadius: "15px" }} />

            <p className="project-title">
              Django
            </p>

            <div className="icon-layout-project">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6oaetahMwwJUin2nl4wDVElSs38IHNqAjg&usqp=CAU"
                className="project-icon"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFfuWnYhXb8yRH_vqFAcZ379xGKZtdiAZxA&usqp=CAU"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdw23uU_-274pzA_YDiNtyQbatvriONygI-Q&usqp=CAU"
                className="project-icon"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyigBlTjgTyWv5CGArRMfbBTGpmn-DMh6Rg&usqp=CAU"
                className="project-icon"
              />
              <div className="btn-container">
              <a href="https://google.com">
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>Source Code</a></Button>
              </a>
              <a href="https://google.com" style={{ marginLeft: "20px" }}>
                <Button variant="secondary"><a style={{fontSize:"1vw"}}>View</a></Button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
