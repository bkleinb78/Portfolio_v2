import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../App.css";

function topNavbar() {
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto" style={{ display: "contents" }}>
            <a
              href="#home"
              onclick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left" }}
            >
              <p style={{ color: "white" }}>HOME</p>
            </a>
            <Nav.Link
              href="#about"
              onclick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left" }}
            >
              <p style={{ color: "white" }}>ABOUT</p>
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onclick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left" }}
            >
              <p style={{ color: "white" }}>PROJECTS</p>
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onclick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "right" }}
            >
              <p style={{ color: "white" }}>CONTACT</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default topNavbar;
