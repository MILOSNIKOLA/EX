/**
 * Point d'entrée principal de l'application
 */

import { NavigationService, AnimationService } from './services';

/**
 * Classe principale pour initialiser l'application
 */
class App {
  private navigationService: NavigationService;
  private animationService: AnimationService;

  constructor() {
    this.navigationService = new NavigationService();
    this.animationService = new AnimationService();
  }

  /**
   * Initialise l'application
   */
  public init(): void {
    this.waitForDOM();
  }

  /**
   * Attend que le DOM soit entièrement chargé
   */
  private waitForDOM(): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  /**
   * Configure les services
   */
  private setup(): void {
    this.navigationService.init();
    this.animationService.init();
    console.log('Application initialized');
  }

  /**
   * Nettoie les ressources
   */
  public destroy(): void {
    this.animationService.destroy();
  }
}

// Initialise l'application
const app = new App();
app.init();

// Nettoie les ressources lors du déchargement
window.addEventListener('beforeunload', () => {
  app.destroy();
});
