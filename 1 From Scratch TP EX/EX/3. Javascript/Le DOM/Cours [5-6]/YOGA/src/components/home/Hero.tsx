'use client'

import { motion } from 'framer-motion'
import { DAILY_INTENTIONS } from '@/lib/constants'

export default function Hero() {
  // Get daily intention based on day of year
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  )
  const intention = DAILY_INTENTIONS[dayOfYear % DAILY_INTENTIONS.length]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yoga-primary/10 to-yoga-breath-light px-6 py-12">
      {/* Decorative circles */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-yoga-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-48 h-48 bg-yoga-breath/20 rounded-full blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-yoga-text-light text-sm font-medium uppercase tracking-wider mb-3"
        >
          Intention du jour
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display text-display-lg text-yoga-text text-balance leading-relaxed"
        >
          {intention}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6"
        >
          <span className="inline-flex items-center gap-2 text-yoga-primary font-medium">
            <span className="w-2 h-2 bg-yoga-primary rounded-full animate-pulse-soft" />
            Bienvenue
          </span>
        </motion.div>
      </div>
    </section>
  )
}
