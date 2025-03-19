import React from 'react';
import { Container } from 'react-bootstrap';
import './OurStory.css';

export const OurStory = () => {
  return (
    <section id="story" className="our-story-section py-5">
      <Container>
        <h2 className="section-title">Nuestra Historia</h2>
        <p className="story-text">
        PAMPA BREWING CO. Es una cerveza artesanal argentina, creada con ingredientes de calidad. Pone todo el esfuerzo y dedicación en cada paso que da y busca encontrar su mejor versión acompañándote en el camino para que vos también encuentres la tuya.

Está a la altura de cada charla, cada historia, anécdota y cada celebración. Te invita a ir por más, a hacer cosas y buscar un escape mental.

Le encanta que compartas con los tuyos y que seas un artesano de buenos momentos. Te acompaña a tomar decisiones simples, que te llevan a grandes lugares.

Nos vemos con una PAMPA en la mano!
        </p>
      </Container>
    </section>
  );
};
