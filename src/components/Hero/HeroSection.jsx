import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">PAMPA Brewing CO</h1>
        <p className="hero-subtitle">Expertos en cerveza lupulada</p>
        <Button variant="outline-light" size="lg">Conoce Nuestros Productos</Button>
      </div>
    </section>
  );
};