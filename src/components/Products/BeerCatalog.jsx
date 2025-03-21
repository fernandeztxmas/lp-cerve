import React from "react";
import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import "./BeerCatalog.css";

const beers = [
  { id: 1, name: "PAMPA Honey", description: "Amarga y aromática", abv: "6.5%" },
  { id: 2, name: "PAMPA Nitro Cream Stout", description: "Negra y cremosa", abv: "5.8%" },
  { id: 3, name: "PAMPA Amber", description: "Suave y refrescante", abv: "4.5%" },
  { id: 4, name: "PAMPA Dorada", description: "Dorada y ligera", abv: "5.0%" },
  { id: 5, name: "PAMPA IPA", description: "Intensa y lupulada", abv: "7.0%" },
  { id: 6, name: "PAMPA Belgian", description: "Clásica y equilibrada", abv: "4.8%" },
];

// Agrupar cervezas en lotes de 3
const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

export const BeerCatalog = () => {
  const beerChunks = chunkArray(beers, 3); // Dividir en grupos de 3

  return (
    <section id="products" className="products-section py-5">
      <Container>
        <h2 className="section-title mb-5 text-center">Nuestras Cervezas</h2>
        <Carousel indicators={false} interval={4000}>
          {beerChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map((beer) => (
                  <Col md={4} key={beer.id}>
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
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};
