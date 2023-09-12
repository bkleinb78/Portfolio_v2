import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../App.css";

function topNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto" style={{ display: "contents" }}>
            <Nav.Link
              href="/"
              onclick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left" }}
            >
              <a style={{ color: "white" }}>HOME</a>
            </Nav.Link>
            <Nav.Link
              href="/about"
              onclick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left" }}
            >
              <a style={{ color: "white" }}>ABOUT</a>
            </Nav.Link>
            <Nav.Link
              href="/projects"
              onclick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left" }}
            >
              <a style={{ color: "white" }}>PROJECTS</a>
            </Nav.Link>
            <Nav.Link
              href="/contact"
              onclick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "right" }}
            >
              <a style={{ color: "white" }}>CONTACT</a>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default topNavbar;
