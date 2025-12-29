import { Metadata } from 'next'

export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = 'https://milosnikola.com',
  type = 'website',
  noindex = false,
}: SEOProps): Metadata {
  const fullTitle = `${title} | MilosNikola`
  const defaultKeywords = [
    'développement web',
    'portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'web design',
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: 'MilosNikola' }],
    creator: 'MilosNikola',
    publisher: 'MilosNikola',
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
      },
    },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: 'MilosNikola',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Données pour le sitemap
export const siteConfig = {
  url: 'https://milosnikola.com',
  defaultLanguage: 'fr',
  languages: ['fr', 'en', 'sr'],
  pages: [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    { path: '/projects', priority: 0.9, changefreq: 'weekly' },
    { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  ],
}


