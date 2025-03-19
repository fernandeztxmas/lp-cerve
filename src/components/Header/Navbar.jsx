import React from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <BsNavbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Container>
        <BsNavbar.Brand href="#home">PAMPA Brewers</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="hero" smooth={true} className="nav-link">Inicio</Link>
            <Link to="products" smooth={true} className="nav-link">Nuestras Cervezas</Link>
            <Link to="story" smooth={true} className="nav-link">Nuestra Historia</Link>
            <Link to="contact" smooth={true} className="nav-link">Contacto</Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};