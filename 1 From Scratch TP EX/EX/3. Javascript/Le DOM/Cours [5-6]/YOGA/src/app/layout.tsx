import type { Metadata, Viewport } from 'next'
import './globals.css'
import Layout from '@/components/global/Layout'

export const metadata: Metadata = {
  title: 'Yoga Flow - Respire, Bouge, Accueille',
  description: 'Application de yoga et respiration pour tous les niveaux. Prends soin de toi avec des séances douces et des exercices de respiration.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Yoga Flow',
  },
}

export const viewport: Viewport = {
  themeColor: '#059669',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
