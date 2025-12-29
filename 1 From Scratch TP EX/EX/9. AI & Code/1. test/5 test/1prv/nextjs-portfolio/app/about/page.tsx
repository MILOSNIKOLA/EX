import { Metadata } from 'next'
import About from '@/components/sections/About'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'À propos - Qui suis-je ?',
  description: 'Découvrez mon parcours, mes valeurs et mon approche du développement web. 4 ans d\'expérience dans la création de sites web modernes.',
  keywords: ['à propos', 'parcours', 'expérience', 'développeur'],
  url: 'https://milosnikola.com/about',
})

export default function AboutPage() {
  return <About />
}

