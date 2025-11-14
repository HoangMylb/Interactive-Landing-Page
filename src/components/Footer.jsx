import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const footerLinks = [
    { id: 1, text: 'Features', href: '#features' },
    { id: 2, text: 'About', href: '#about' },
    { id: 3, text: 'Highlights', href: '#highlights' },
    { id: 4, text: 'Contact', href: '#cta' },
  ];

  const socialLinks = [
    { id: 1, text: 'Twitter', href: '#' },
    { id: 2, text: 'Facebook', href: '#' },
    { id: 3, text: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5 className="footer-title">About</h5>
            <p>
              Modern landing page showcasing interactive design and smooth animations.
            </p>
          </div>

          <div className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.href} className="social-link">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            &copy; 2025 Interactive Landing Page. All rights reserved. | Designed with ❤️ by Modern Web Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
