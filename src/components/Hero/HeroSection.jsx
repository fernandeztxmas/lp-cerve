import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">PAMPA Brewing CO</h1>
        <p className="hero-subtitle">Expertos en cerveza lupulada</p>
        <Link to="products" smooth={true}>
        <Button variant="outline-light" size="lg">Conoce Nuestros Productos</Button>
        </Link>
      </div>
    </section>
  );
};



        