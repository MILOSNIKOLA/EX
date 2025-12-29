export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: '1',
    icon: '🎨',
    title: 'Design Web',
    description: 'Création de designs modernes et élégants qui reflètent votre identité de marque.',
  },
  {
    id: '2',
    icon: '💻',
    title: 'Développement Web',
    description: 'Développement de sites web responsive et performants avec les dernières technologies.',
  },
  {
    id: '3',
    icon: '📱',
    title: 'Mobile First',
    description: 'Des sites optimisés pour tous les appareils, avec une expérience utilisateur optimale.',
  },
  {
    id: '4',
    icon: '⚡',
    title: 'Optimisation',
    description: 'Amélioration des performances, du SEO et de la vitesse de chargement.',
  },
  {
    id: '5',
    icon: '🛠️',
    title: 'Maintenance',
    description: 'Support continu et mise à jour régulière de votre site web.',
  },
  {
    id: '6',
    icon: '🚀',
    title: 'Stratégie Digital',
    description: 'Conseil et accompagnement pour votre présence en ligne.',
  },
]


