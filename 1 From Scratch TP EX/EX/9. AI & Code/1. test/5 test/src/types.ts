/**
 * Types et interfaces pour le site
 */

export interface NavLink {
  href: string;
  label: string;
  id: string;
}

export interface SectionElement {
  id: string;
  element: HTMLElement;
  offset: number;
}

export interface AnimationConfig {
  threshold: number;
  rootMargin: string;
  animationDelay: number;
}

export interface NavigationState {
  isOpen: boolean;
  activeLink: string | null;
}
