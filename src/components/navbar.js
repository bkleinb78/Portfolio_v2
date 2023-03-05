import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../App.css'

function topNavbar() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/" className='nav-item'>HOME</Nav.Link>
              <Nav.Link href="/about" className='nav-item'>ABOUT</Nav.Link>
              <Nav.Link href="/contact" className='nav-item'>CONTACT</Nav.Link>
              <Nav.Link href="/projects" className='nav-item'>PROJECTS</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default topNavbar;