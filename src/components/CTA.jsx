import React, { useEffect } from 'react';
import '../styles/CTA.css';
import { animateCTASection } from '../animations/sectionAnimations';

const CTA = () => {
  useEffect(() => {
    animateCTASection();
  }, []);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    // Implement smooth scroll behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Join us and experience modern web design with smooth animations
          </p>
          <div className="cta-buttons">
            <button className="btn btn-light btn-lg">Start Your Journey</button>
            <button className="btn btn-outline-light btn-lg">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
