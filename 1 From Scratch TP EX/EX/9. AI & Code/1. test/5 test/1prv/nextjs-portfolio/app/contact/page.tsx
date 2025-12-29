import { Metadata } from 'next'
import Contact from '@/components/sections/Contact'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Contact - Travaillons ensemble',
  description: 'Contactez-moi pour discuter de votre projet web. Je suis disponible pour créer des solutions sur mesure adaptées à vos besoins.',
  keywords: ['contact', 'devis', 'projet web', 'collaboration'],
  url: 'https://milosnikola.com/contact',
})

export default function ContactPage() {
  return <Contact />
}

