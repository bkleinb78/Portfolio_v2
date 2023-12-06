import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useMediaQuery } from 'react-responsive'

import "../App.css";

function TopNavbar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto" style={{ display: isTabletOrMobile? "contents" : "flex" }}>
            <a
              href="#home"
              // onClick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left", textDecoration: 'none' }}
            >
              <p style={{ color: "white" }}>HOME</p>
            </a>
            <Nav.Link
              href="#about"
              // onClick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left" }}
            >
              <p style={{ color: "white" }}>ABOUT</p>
            </Nav.Link>
            <Nav.Link
              href="#projects"
              // onClick="toggleMenu()"
              className="nav-item"
              style={{ textAlign: "left" }}
            >
              <p style={{ color: "white" }}>PROJECTS</p>
            </Nav.Link>
            <Nav.Link
              href="#contact"
              // onClick=toggleMenu()"
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

export default TopNavbar;
