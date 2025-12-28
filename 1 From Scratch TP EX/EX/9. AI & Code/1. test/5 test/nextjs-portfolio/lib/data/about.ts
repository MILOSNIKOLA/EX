export interface Value {
  title: string
  description: string
  icon: string
}

export interface Quote {
  text: string
  author?: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export const values: Value[] = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Chaque projet est une opportunité de créer quelque chose d\'exceptionnel et de mémorable.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Je combine créativité et technologies modernes pour des solutions uniques et performantes.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Votre vision, mon expertise. Ensemble, nous transformons vos idées en réalité digitale.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Des sites rapides, optimisés et conçus pour offrir la meilleure expérience utilisateur.',
  },
]

export const quotes: Quote[] = [
  {
    text: 'La simplicité est la sophistication suprême.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'Le design n\'est pas seulement à quoi ça ressemble, c\'est comment ça fonctionne.',
  },
]

export const timeline: TimelineItem[] = [
  {
    year: '2020',
    title: 'Début du parcours',
    description: 'Premiers pas dans le développement web et découverte de ma passion pour le design digital.',
  },
  {
    year: '2021',
    title: 'Premiers projets',
    description: 'Réalisation de sites web pour des clients locaux et développement de mes compétences techniques.',
  },
  {
    year: '2022',
    title: 'Spécialisation',
    description: 'Focus sur React et Next.js, création de solutions web modernes et performantes.',
  },
  {
    year: '2023',
    title: 'Expansion',
    description: 'Collaboration avec des clients internationaux et développement d\'une expertise en architecture web.',
  },
  {
    year: '2024',
    title: 'Innovation continue',
    description: 'Exploration des dernières technologies et création de projets toujours plus ambitieux.',
  },
]

export const experienceYears = 4

