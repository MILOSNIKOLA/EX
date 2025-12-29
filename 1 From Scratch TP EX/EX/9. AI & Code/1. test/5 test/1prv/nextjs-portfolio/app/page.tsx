import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import { generateMetadata } from '@/lib/seo'
import styles from './page.module.scss'

export const metadata: Metadata = generateMetadata({
  title: 'Accueil - Portfolio Professionnel',
  description: 'Bienvenue sur mon portfolio. Je crée des expériences web modernes, professionnelles et élégantes qui marquent les esprits.',
  keywords: ['accueil', 'portfolio', 'développeur web'],
  url: 'https://milosnikola.com',
})

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}

