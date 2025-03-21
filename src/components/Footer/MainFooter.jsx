import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './MainFooter.css';

export const MainFooter = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center" >
            <h5>Contacto</h5>
            <p>contacto@cervezaartesanal.com<br/>Tel: +54 11 1234-5678</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Síguenos</h5>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebook} className="mx-2" />
              <FontAwesomeIcon icon={faInstagram} className="mx-2" />
              <FontAwesomeIcon icon={faTwitter} className="mx-2" />
            </div>
          </Col>
          <Col md={4} className="text-center">
            <h5>Ubicación</h5>
            <p>La Yungeré S.A.</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
          <p>BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS. </p>
            <p className="mb-0">&copy; 
              2025 Cerveza PAMPA Brewing CO. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};