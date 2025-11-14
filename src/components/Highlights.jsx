import React, { useEffect } from 'react';
import '../styles/Highlights.css';
import HighlightItem from './HighlightItem';
import { animateSectionHeaders, animateHighlightItems } from '../animations/sectionAnimations';

const Highlights = () => {
  useEffect(() => {
    animateSectionHeaders();
    animateHighlightItems();
  }, []);

  const highlightsData = [
    {
      id: 1,
      number: '01',
      title: 'HTML5 Semantic',
      description: 'Clean, semantic HTML5 structure optimized for SEO and accessibility.',
    },
    {
      id: 2,
      number: '02',
      title: 'CSS3 Advanced',
      description: 'Modern Flexbox & Grid layouts with smooth transitions and transforms.',
    },
    {
      id: 3,
      number: '03',
      title: 'GSAP Animations',
      description: 'Text reveal, fade-in, slide-in, and parallax effects using GSAP.',
    },
    {
      id: 4,
      number: '04',
      title: 'ScrollTrigger',
      description: 'Scroll-based animations that trigger when elements enter the viewport.',
    },
    {
      id: 5,
      number: '05',
      title: 'Responsive Design',
      description: 'Mobile-first approach with breakpoints for all device sizes.',
    },
    {
      id: 6,
      number: '06',
      title: 'Performance',
      description: 'Optimized for 60 FPS with efficient animations and minimal repaints.',
    },
  ];

  return (
    <section id="highlights" className="highlights">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Project Highlights</h2>
          <p className="section-subtitle">
            Key technologies and features implemented
          </p>
        </div>

        <div className="highlights-grid">
          {highlightsData.map((highlight) => (
            <HighlightItem
              key={highlight.id}
              number={highlight.number}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
