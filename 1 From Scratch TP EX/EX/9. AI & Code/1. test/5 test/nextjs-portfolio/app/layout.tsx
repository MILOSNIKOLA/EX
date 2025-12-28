import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { generateMetadata as genMeta } from '@/lib/seo'
import './globals.scss'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

// Metadata par défaut pour la page d'accueil
export const metadata: Metadata = genMeta({
  title: 'MilosNikola - Portfolio Professionnel',
  description: 'Développeur web créant des expériences modernes et professionnelles. Spécialisé en React, Next.js et développement web moderne.',
  keywords: ['portfolio', 'développement web', 'React', 'Next.js', 'TypeScript'],
  url: 'https://milosnikola.com',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

