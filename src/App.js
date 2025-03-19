import React from 'react';
import { Navbar } from './components/Header/Navbar';
import { HeroSection } from './components/Hero/HeroSection';
import { BeerCatalog } from './components/Products/BeerCatalog';
import { OurStory } from './components/Story/OurStory';
import { ContactForm } from './components/Contact/ContactForm';
import { MainFooter } from './components/Footer/MainFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BeerCatalog />
      <OurStory />
      <ContactForm />
      <MainFooter />
    </div>
  );
}

export default App;