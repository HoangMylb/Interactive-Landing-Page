import React, { useEffect } from 'react';
import '../styles/Hero.css';
import { animateHeroTitle, animateHeroElements, animateHeroImage } from '../animations/heroAnimations';

const Hero = () => {
  useEffect(() => {
    // Trigger animations khi component mount
    animateHeroTitle();
    animateHeroElements();
    animateHeroImage();
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="word">Modern</span>
            <span className="word">Landing</span>
            <span className="word">Page</span>
          </h1>
          <p className="hero-subtitle">
            Experience smooth animations and modern UI design with GSAP
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg cta-btn">
              Get Started
            </button>
            <button
              className="btn btn-outline-light btn-lg cta-btn-secondary"
              onClick={(e) => handleSmoothScroll(e, '#features')}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <img
              src="/assets/img/hero-placeholder.svg"
              alt="Hero Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
