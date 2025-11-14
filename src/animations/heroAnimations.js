import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero Section Animation Exports
 * Separated for cleaner imports in Hero component
 */

export const animateHeroTitle = () => {
  const words = gsap.utils.toArray('.hero-title .word');
  gsap.to(words, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });
};

export const animateHeroElements = () => {
  const heroTl = gsap.timeline();

  heroTl.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 0.8,
  }, 0.3);

  heroTl.to('.cta-btn, .cta-btn-secondary', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
  }, 0.5);

  return heroTl;
};

export const animateHeroImage = () => {
  gsap.to('.hero-image-container', {
    opacity: 1,
    duration: 0.8,
    delay: 0.2,
  });

  gsap.to('.hero-image-container img', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      markers: false,
    },
    y: 100,
    opacity: 0.7,
  });
};
