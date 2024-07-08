





import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useAuth } from '../hook/useAuth';
import { AiOutlineUser } from 'react-icons/ai';

function NavBar() {
  const auth = useAuth();
  const { login, address, connectd } = auth;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Container>
        <Navbar.Brand href="#home">
          <strong style={{ fontSize: '1.5rem' }}>WEB3</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* Example of navigation links, adjust as per your app */}
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          {/* Connect Wallet button */}
          <Button
                variant="dark"
                onClick={() => login()}
              >
                {connectd && address ? address : "Connect wallet"}
                
                
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
