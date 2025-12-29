/**
 * Constantes et configuration
 */

export const ANIMATION_CONFIG = {
  threshold: 0.1,
  rootMargin: '0px 0px -80px 0px',
  animationDelay: 100, // ms
} as const;

export const SELECTORS = {
  hamburger: '.hamburger',
  navMenu: '.nav-menu',
  navLink: '.nav-link',
  section: 'section[id]',
  serviceCard: '.service-card',
  portfolioItem: '.portfolio-item',
  statItem: '.stat-item',
  aboutText: '.about-text',
  contactInfo: '.contact-info',
  contactForm: '.contact-form',
  heroBadge: '.hero-badge',
} as const;

export const CLASSES = {
  active: 'active',
  fadeIn: 'fade-in',
  visible: 'visible',
} as const;

export const SCROLL_OFFSET = 100; // pixels
