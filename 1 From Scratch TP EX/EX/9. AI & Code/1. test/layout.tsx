import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aura Estate - L\'immobilier piloté par l\'IA',
  description: 'Découvrez des propriétés d\'exception avec notre agent IA intelligent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}


