/**
 * Service de gestion des animations
 */

import { ANIMATION_CONFIG, SELECTORS, CLASSES } from '../constants';

export class AnimationService {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: ANIMATION_CONFIG.threshold,
        rootMargin: ANIMATION_CONFIG.rootMargin,
      }
    );
  }

  /**
   * Initialise les animations
   */
  public init(): void {
    this.animateServiceCards();
    this.animatePortfolioItems();
    this.animateStatItems();
    this.animateOtherSections();
    this.animateHeroBadge();
  }

  /**
   * Gère l'intersection des éléments
   */
  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          (entry.target as HTMLElement).classList.add(CLASSES.visible);
        }, index * ANIMATION_CONFIG.animationDelay);
      }
    });
  }

  /**
   * Anime les cartes de service
   */
  private animateServiceCards(): void {
    const serviceCards = document.querySelectorAll(SELECTORS.serviceCard);
    serviceCards.forEach((card, index) => {
      const element = card as HTMLElement;
      element.classList.add(CLASSES.fadeIn);
      element.style.transitionDelay = `${index * 0.1}s`;
      this.observer.observe(element);
    });
  }

  /**
   * Anime les items du portfolio
   */
  private animatePortfolioItems(): void {
    const portfolioItems = document.querySelectorAll(SELECTORS.portfolioItem);
    portfolioItems.forEach((item) => {
      const element = item as HTMLElement;
      element.classList.add(CLASSES.fadeIn);
      this.observer.observe(element);
    });
  }

  /**
   * Anime les items de statistiques
   */
  private animateStatItems(): void {
    const statItems = document.querySelectorAll(SELECTORS.statItem);
    statItems.forEach((item) => {
      const element = item as HTMLElement;
      element.classList.add(CLASSES.fadeIn);
      this.observer.observe(element);
    });
  }

  /**
   * Anime les autres sections
   */
  private animateOtherSections(): void {
    const elementsToAnimate = [
      SELECTORS.aboutText,
      SELECTORS.contactInfo,
      SELECTORS.contactForm,
    ];

    elementsToAnimate.forEach((selector) => {
      const element = document.querySelector(selector) as HTMLElement | null;
      if (element) {
        element.classList.add(CLASSES.fadeIn);
        this.observer.observe(element);
      }
    });
  }

  /**
   * Anime le badge du héros
   */
  private animateHeroBadge(): void {
    const heroBadge = document.querySelector(SELECTORS.heroBadge) as HTMLElement | null;
    if (heroBadge) {
      heroBadge.style.animation = 'fadeInDown 0.8s ease 0.2s both';
    }
  }

  /**
   * Arrête l'observer
   */
  public destroy(): void {
    this.observer.disconnect();
  }
}
