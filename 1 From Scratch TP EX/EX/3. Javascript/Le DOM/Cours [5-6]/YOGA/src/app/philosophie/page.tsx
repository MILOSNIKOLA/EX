'use client'

import { motion } from 'framer-motion'
import MiniArticle from '@/components/philosophie/MiniArticle'
import { PHILOSOPHY_ARTICLES } from '@/lib/constants'

export default function PhilosophiePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <h1 className="font-display text-display-lg text-yoga-text">
          Philosophie
        </h1>
        <p className="text-yoga-text-light mt-1">
          Découvre les fondements du yoga
        </p>
      </header>

      {/* Articles */}
      <section className="px-6 py-4">
        <div className="space-y-4">
          {PHILOSOPHY_ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <MiniArticle article={article} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl text-center"
        >
          <p className="text-yoga-text-light">
            Plus d&apos;articles arrivent bientôt...
          </p>
          <p className="text-sm text-yoga-text-light mt-2">
            Abonne-toi pour être notifié 🧘
          </p>
        </motion.div>
      </section>
    </div>
  )
}
