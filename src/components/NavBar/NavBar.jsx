import React from 'react'
import { Container,  Nav,  Navbar, Offcanvas } from 'react-bootstrap'
import './style.css'

export default function NavBar() {
  return (
    <Navbar expand="sm" bg="dark" data-bs-theme="dark" fixed='top'>
    <Container className='mx-md-3 ' fluid={"fluid"}>
        <div className='contBtnNav'>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="center"
        className="bg-dark text-white"
        data-bs-theme="dark"
        >
        <Offcanvas.Header closeButton>

        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav className='contNav'>
              <Nav.Link href="#info" className='link link1'>#info</Nav.Link>
              <Nav.Link href="#skills" className='link link2'>#skills</Nav.Link>
              <Nav.Link href="#projects" className='link link3'>#projects</Nav.Link>
              <Nav.Link href="#contacts" className='link link5'>#contacts</Nav.Link>
            </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
        </div>
    </Container>
    </Navbar>
  )
}
