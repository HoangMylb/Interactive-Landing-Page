import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero Section Animations
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

/**
 * Section Animations
 */

export const animateSectionHeaders = () => {
  const sections = gsap.utils.toArray('.section-title, .section-subtitle');

  sections.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 60%',
        scrub: false,
        markers: false,
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  });
};

export const animateFeatureCards = () => {
  const cards = gsap.utils.toArray('.feature-card');

  gsap.to(cards, {
    scrollTrigger: {
      trigger: '.features',
      start: 'top 70%',
      markers: false,
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.12,
    ease: 'power2.out',
  });
};

export const animateAboutImage = () => {
  gsap.to('.about-image', {
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 70%',
      markers: false,
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
};

export const animateAboutText = () => {
  gsap.to('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 70%',
      markers: false,
    },
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
  });
};

export const animateAboutFeatures = () => {
  const features = gsap.utils.toArray('.about-feature-item');

  gsap.to(features, {
    scrollTrigger: {
      trigger: '.about-features',
      start: 'top 75%',
      markers: false,
    },
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });
};

export const animateHighlightItems = () => {
  const items = gsap.utils.toArray('.highlight-item');

  gsap.to(items, {
    scrollTrigger: {
      trigger: '.highlights',
      start: 'top 70%',
      markers: false,
    },
    opacity: 1,
    scale: 1,
    duration: 0.6,
    stagger: 0.08,
    ease: 'back.out(1.7)',
  });
};

export const animateStats = () => {
  const stats = gsap.utils.toArray('.stat-number');

  gsap.to('.stat-box', {
    scrollTrigger: {
      trigger: '.stats',
      start: 'top 70%',
      markers: false,
    },
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });

  stats.forEach((stat) => {
    const target = parseInt(stat.dataset.target);

    gsap.to(stat, {
      textContent: target,
      duration: 2,
      scrollTrigger: {
        trigger: '.stats',
        start: 'top 70%',
        markers: false,
      },
      snap: { textContent: 1 },
      ease: 'power1.out',
      onUpdate: function () {
        const current = Math.ceil(parseFloat(stat.textContent));
        stat.textContent = current;
      },
    });
  });
};

export const animateCTASection = () => {
  gsap.to('.cta-content', {
    scrollTrigger: {
      trigger: '.cta',
      start: 'top 70%',
      markers: false,
    },
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  });
};

/**
 * Navbar Scroll Effect
 */
export const initNavbarScroll = () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
};

/**
 * Button & Card Hover Effects
 */
export const initButtonHovers = () => {
  const buttons = document.querySelectorAll('.cta-btn, .cta-btn-secondary, .btn');

  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
};

export const initCardHovers = () => {
  const cards = document.querySelectorAll('.feature-card, .highlight-item');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
};

/**
 * Initialize all animations on mount
 */
export const initializeAllAnimations = () => {
  initNavbarScroll();
  initButtonHovers();
  initCardHovers();

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
};
