/**
 * Service de gestion de la navigation
 */

import { SELECTORS, CLASSES, SCROLL_OFFSET } from '../constants';
import type { NavigationState } from '../types';

export class NavigationService {
  private hamburger: HTMLElement | null;
  private navMenu: HTMLElement | null;
  private navLinks: NodeListOf<HTMLAnchorElement>;
  private state: NavigationState = {
    isOpen: false,
    activeLink: null,
  };

  constructor() {
    this.hamburger = document.querySelector(SELECTORS.hamburger);
    this.navMenu = document.querySelector(SELECTORS.navMenu);
    this.navLinks = document.querySelectorAll(SELECTORS.navLink);

    if (!this.hamburger || !this.navMenu) {
      console.warn('Navigation elements not found');
    }
  }

  /**
   * Initialise les event listeners de la navigation
   */
  public init(): void {
    this.setupHamburgerToggle();
    this.setupNavLinkClick();
    this.setupScrollListener();
  }

  /**
   * Configure le bouton hamburger
   */
  private setupHamburgerToggle(): void {
    this.hamburger?.addEventListener('click', () => {
      this.toggleMobileMenu();
    });
  }

  /**
   * Bascule le menu mobile
   */
  private toggleMobileMenu(): void {
    if (!this.hamburger || !this.navMenu) return;

    this.state.isOpen = !this.state.isOpen;
    this.hamburger.classList.toggle(CLASSES.active);
    this.navMenu.classList.toggle(CLASSES.active);
  }

  /**
   * Ferme le menu mobile
   */
  private closeMobileMenu(): void {
    if (!this.hamburger || !this.navMenu) return;

    this.state.isOpen = false;
    this.hamburger.classList.remove(CLASSES.active);
    this.navMenu.classList.remove(CLASSES.active);
  }

  /**
   * Configure les clics sur les liens de navigation
   */
  private setupNavLinkClick(): void {
    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });
  }

  /**
   * Configure l'écouteur de scroll
   */
  private setupScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.highlightActiveLink();
    });
  }

  /**
   * Met en surbrillance le lien de navigation actif
   */
  private highlightActiveLink(): void {
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll(SELECTORS.section);

    sections.forEach((section) => {
      const sectionElement = section as HTMLElement;
      const sectionHeight = sectionElement.offsetHeight;
      const sectionTop = sectionElement.offsetTop - SCROLL_OFFSET;
      const sectionId = sectionElement.getAttribute('id');

      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        this.navLinks.forEach((link) => {
          link.classList.remove(CLASSES.active);
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add(CLASSES.active);
            this.state.activeLink = sectionId;
          }
        });
      }
    });
  }

  /**
   * Obtient l'état actuel de la navigation
   */
  public getState(): NavigationState {
    return { ...this.state };
  }
}
