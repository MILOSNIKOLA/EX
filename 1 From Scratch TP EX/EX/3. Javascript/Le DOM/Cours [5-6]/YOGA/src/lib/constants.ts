// Daily intentions - rotating based on day of year
export const DAILY_INTENTIONS = [
  'Prends 15 minutes pour te souvenir de ton souffle.',
  "Aujourd'hui, accueille simplement ce qui est.",
  'Bouge doucement, respire profondément.',
  'Invite la douceur dans chaque mouvement.',
  'Chaque respiration est une nouvelle chance de commencer.',
  'Sens ton corps, écoute ses besoins.',
  'La pratique commence avec un simple souffle.',
]

export const LEVELS = {
  easy: { label: 'Facile', duration: 2, color: 'bg-emerald-100 text-emerald-700' },
  medium: { label: 'Moyen', duration: 5, color: 'bg-amber-100 text-amber-700' },
  hard: { label: 'Difficile', duration: 10, color: 'bg-orange-100 text-orange-700' },
  extremeHard: { label: 'Intense', duration: 20, color: 'bg-red-100 text-red-700' },
} as const

export type Level = keyof typeof LEVELS

export const GOALS = [
  'Réveil doux',
  'Calmer le mental',
  'Souplesse',
  'Énergie',
  'Détente',
  'Force douce',
  'Lâcher-prise',
] as const

export type Goal = typeof GOALS[number]

// Free sessions data
export const FREE_SESSIONS = [
  // Easy - 2 min
  {
    id: 'easy-1',
    title: 'Réveil doux',
    description: '3 postures assises pour stimuler sans stress',
    duration: 120,
    level: 'easy' as Level,
    goal: 'Réveil doux',
    free: true,
    poses: ['Position assise', 'Rotation du cou', 'Étirement latéral'],
  },
  {
    id: 'easy-2',
    title: 'Respiration assise',
    description: 'Respiration 4-6 pour calmer le mental',
    duration: 120,
    level: 'easy' as Level,
    goal: 'Calmer le mental',
    free: true,
    poses: ['Position assise confortable', 'Mains sur les genoux'],
  },
  // Medium - 5 min
  {
    id: 'medium-1',
    title: 'Échauffement matin',
    description: 'Salutation au soleil A ralenti',
    duration: 300,
    level: 'medium' as Level,
    goal: 'Énergie',
    free: true,
    poses: ['Tadasana', 'Uttanasana', 'Ardha Uttanasana', 'Chaturanga', 'Urdhva Mukha', 'Adho Mukha'],
  },
  {
    id: 'medium-2',
    title: "Dos d'eau",
    description: 'Chat-vache + enfant + cobra pour la souplesse dorsale',
    duration: 300,
    level: 'medium' as Level,
    goal: 'Souplesse',
    free: true,
    poses: ['Marjaryasana', 'Bitilasana', 'Balasana', 'Bhujangasana'],
  },
  // Hard - 10 min
  {
    id: 'hard-1',
    title: 'Flow débutant',
    description: 'Salutation A + guerrier 1/2 + triangle',
    duration: 600,
    level: 'hard' as Level,
    goal: 'Énergie',
    free: true,
    poses: ['Surya Namaskar A', 'Virabhadrasana I', 'Virabhadrasana II', 'Trikonasana'],
  },
  {
    id: 'hard-2',
    title: 'Hanche & cœur',
    description: 'Pigeon + pont pour le lâcher-prise',
    duration: 600,
    level: 'hard' as Level,
    goal: 'Lâcher-prise',
    free: true,
    poses: ['Kapotasana', 'Setu Bandhasana', 'Supta Baddha Konasana'],
  },
  // ExtremeHard - 20 min
  {
    id: 'extremehard-1',
    title: 'Vinyasa fondations',
    description: 'Salutation A & B + équilibres',
    duration: 1200,
    level: 'extremeHard' as Level,
    goal: 'Énergie',
    free: true,
    poses: ['Surya Namaskar A', 'Surya Namaskar B', 'Vrksasana', 'Garudasana'],
  },
  {
    id: 'extremehard-2',
    title: 'Force douce',
    description: 'Planche + chien + guerrier 3',
    duration: 1200,
    level: 'extremeHard' as Level,
    goal: 'Force douce',
    free: true,
    poses: ['Phalakasana', 'Adho Mukha Svanasana', 'Virabhadrasana III'],
  },
]

// Breathing exercises
export const BREATHING_EXERCISES = [
  {
    id: 'coherence',
    title: 'Cohérence cardiaque',
    description: 'Respiration 5-5 pour équilibrer le système nerveux',
    duration: 300, // 5 min
    inhale: 5,
    hold: 0,
    exhale: 5,
    pause: 0,
  },
  {
    id: 'square',
    title: 'Respiration carrée',
    description: 'Respiration 4-4-4-4 pour la concentration',
    duration: 120, // 2 min
    inhale: 4,
    hold: 4,
    exhale: 4,
    pause: 4,
  },
  {
    id: 'calming',
    title: '4-6 apaisant',
    description: "Expiration longue pour activer le parasympathique",
    duration: 60, // 1 min
    inhale: 4,
    hold: 0,
    exhale: 6,
    pause: 0,
  },
]

// Philosophy articles
export const PHILOSOPHY_ARTICLES = [
  {
    id: 'nose-breathing',
    title: 'Pourquoi respirer par le nez ?',
    readTime: 2,
    excerpt: 'Le nez filtre, réchauffe et humidifie l\'air. Cette respiration active le système nerveux parasympathique, favorisant calme et récupération.',
    content: 'La respiration nasale offre de nombreux bienfaits. Le nez filtre les particules et bactéries, réchauffe l\'air avant qu\'il n\'atteigne les poumons, et active le système nerveux parasympathique. Cette activation favorise un état de calme et de récupération. En respirant par le nez, tu invites ton corps à se détendre naturellement.',
  },
  {
    id: 'slowness',
    title: 'La lenteur comme alliée',
    readTime: 2,
    excerpt: 'Bouger lentement permet aux fascias de s\'adapter et au cerveau d\'intégrer les sensations. L\'observation devient méditation.',
    content: 'Dans notre monde rapide, la lenteur devient précieuse. En yoga, bouger doucement permet aux fascias — ces tissus conjonctifs qui enveloppent muscles et organes — de s\'adapter progressivement. Le cerveau a le temps d\'intégrer chaque sensation. L\'observation de ton corps en mouvement devient une forme de méditation active.',
  },
]
