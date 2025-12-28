export interface Project {
  id: string
  title: string
  description: string
  category: string
  image?: string
  gradient: string
  link?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Site Web Professionnel',
    description: 'Site web professionnel avec design moderne et responsive',
    category: 'Web Design',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: '2',
    title: 'Application Web',
    description: 'Application web interactive avec API backend',
    category: 'Développement',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: '3',
    title: 'E-commerce Moderne',
    description: 'Plateforme e-commerce avec paiement sécurisé',
    category: 'E-commerce',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    id: '4',
    title: 'Landing Page',
    description: 'Landing page optimisée pour conversion',
    category: 'Marketing',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

