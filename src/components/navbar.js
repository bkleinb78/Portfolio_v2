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
              <Nav.Link href="/" className='nav-item'><a style={{color:"white"}}>HOME</a></Nav.Link>
              <Nav.Link href="/about" className='nav-item'><a style={{color:"white"}}>ABOUT</a></Nav.Link>
              <Nav.Link href="/projects" className='nav-item'><a style={{color:"white"}}>PROJECTS</a></Nav.Link>
              <Nav.Link href="/contact" className='nav-item'><a style={{color:"white"}}>CONTACT</a></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default topNavbar;