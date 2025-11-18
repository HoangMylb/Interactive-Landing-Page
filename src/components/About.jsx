import React, { useEffect } from 'react';
import '../styles/About.css';
import { animateAboutImage, animateAboutText, animateAboutFeatures } from '../animations/sectionAnimations';

const About = () => {
  useEffect(() => {
    animateAboutImage();
    animateAboutText();
    animateAboutFeatures();
  }, []);

  const aboutFeatures = [
    'Mobile-first responsive design',
    'GSAP + ScrollTrigger animations',
    'SEO optimized HTML5',
    '60 FPS performance optimized',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img
              src="https://i.postimg.cc/mDk0cZ0Z/about-placeholder.jpg"
              alt="About"
              className="img-fluid"
            />
          </div>

          <div className="about-content">
            <h2 className="section-title">About This Project</h2>
            <p className="about-text">
              This is a modern portfolio landing page designed to showcase interactive web design with cutting-edge animation techniques.
            </p>
            <p className="about-text">
              Built with clean HTML5, responsive CSS3 Grid/Flexbox, and powerful JavaScript animations using GSAP and ScrollTrigger for optimal performance.
            </p>

            <div className="about-features">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="about-feature-item">
                  <span className="feature-check">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
