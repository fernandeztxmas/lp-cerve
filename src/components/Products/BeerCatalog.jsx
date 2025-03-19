import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './BeerCatalog.css';

const beers = [
  { id: 1, name: 'PAMPA HONEY', description: 'Amarga y aromática', abv: '6.5%' },
  { id: 2, name: 'PAMPA IPA', description: 'Negra y cremosa', abv: '5.8%' },
  { id: 3, name: 'PAMPA AMBER', description: 'Suave y refrescante', abv: '4.5%' }
];

export const BeerCatalog = () => {
  return (
    <section id="products" className="products-section py-5">
      <Container>
        <h2 className="section-title mb-5">Nuestras Cervezas</h2>
        <Row>
          {beers.map(beer => (
            <Col md={4} key={beer.id} className="mb-4">
              <Card className="beer-card h-100">
                <Card.Img variant="top" src={`/images/beer-${beer.id}.jpg`} />
                <Card.Body>
                  <Card.Title>{beer.name}</Card.Title>
                  <Card.Text>{beer.description}</Card.Text>
                  <small className="text-muted">ABV: {beer.abv}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};