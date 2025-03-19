import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './ContactForm.css';

export const ContactForm = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="section-title">Contáctanos</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="tucorreo@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." />
          </Form.Group>
          <Button variant="primary" type="submit">Enviar</Button>
        </Form>
      </Container>
    </section>
  );
};
