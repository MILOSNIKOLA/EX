// Internationalization configuration
// Will be fully configured with next-i18next in production

export const defaultLocale = 'fr'
export const locales = ['fr', 'en'] as const
export type Locale = typeof locales[number]

export const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.practice': 'Pratiquer',
    'nav.breathe': 'Respirer',
    'nav.profile': 'Profil',
    
    // Home
    'home.intention': 'Intention du jour',
    'home.quickAccess': 'Accès rapide',
    'home.freeSessions': 'Séances gratuites',
    'home.seeAll': 'Voir tout',
    
    // Breathing
    'breath.inhale': 'Inspire',
    'breath.hold': 'Retiens',
    'breath.exhale': 'Expire',
    'breath.pause': 'Pause',
    
    // Sessions
    'session.poses': 'postures',
    'session.free': 'Gratuit',
    'session.premium': 'Premium',
    'session.minutes': 'min',
    
    // Levels
    'level.easy': 'Facile',
    'level.medium': 'Moyen',
    'level.hard': 'Difficile',
    'level.extremeHard': 'Intense',
    
    // Profile
    'profile.streak': 'jours consécutifs',
    'profile.totalTime': 'Temps total',
    'profile.sessions': 'Séances',
    'profile.subscription': 'Abonnement',
    'profile.premium': 'Accès Premium',
    'profile.unlock': 'Débloquer Premium',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.practice': 'Practice',
    'nav.breathe': 'Breathe',
    'nav.profile': 'Profile',
    
    // Home
    'home.intention': 'Daily intention',
    'home.quickAccess': 'Quick access',
    'home.freeSessions': 'Free sessions',
    'home.seeAll': 'See all',
    
    // Breathing
    'breath.inhale': 'Inhale',
    'breath.hold': 'Hold',
    'breath.exhale': 'Exhale',
    'breath.pause': 'Pause',
    
    // Sessions
    'session.poses': 'poses',
    'session.free': 'Free',
    'session.premium': 'Premium',
    'session.minutes': 'min',
    
    // Levels
    'level.easy': 'Easy',
    'level.medium': 'Medium',
    'level.hard': 'Hard',
    'level.extremeHard': 'Intense',
    
    // Profile
    'profile.streak': 'consecutive days',
    'profile.totalTime': 'Total time',
    'profile.sessions': 'Sessions',
    'profile.subscription': 'Subscription',
    'profile.premium': 'Premium Access',
    'profile.unlock': 'Unlock Premium',
  },
}

export function t(key: string, locale: Locale = defaultLocale): string {
  return translations[locale][key as keyof typeof translations['fr']] || key
}
