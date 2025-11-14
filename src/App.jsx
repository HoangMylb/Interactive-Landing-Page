import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Highlights from './components/Highlights';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Highlights />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
