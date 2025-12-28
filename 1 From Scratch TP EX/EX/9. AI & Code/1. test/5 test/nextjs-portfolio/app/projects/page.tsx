import { Metadata } from 'next'
import Projects from '@/components/sections/Projects'
import { generateMetadata } from '@/lib/seo'
import styles from './page.module.scss'

export const metadata: Metadata = generateMetadata({
  title: 'Projets - Mes réalisations',
  description: 'Découvrez mes projets de développement web : sites professionnels, applications web, e-commerce et landing pages modernes.',
  keywords: ['projets', 'portfolio', 'réalisations', 'développement web'],
  url: 'https://milosnikola.com/projects',
})

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <Projects />
    </div>
  )
}

