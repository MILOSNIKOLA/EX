'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ClockIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { FREE_SESSIONS, LEVELS } from '@/lib/constants'

export default function SessionList() {
  // Show a preview of sessions
  const previewSessions = FREE_SESSIONS.slice(0, 4)

  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-display-md text-yoga-text">
          Séances gratuites
        </h2>
        <Link
          href="/pratiquer"
          className="text-sm font-medium text-yoga-primary hover:text-yoga-primary-dark transition-colors"
        >
          Voir tout
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {previewSessions.map((session, index) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link
              href={`/seance/${session.id}`}
              className="group block p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-yoga-primary/20"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${LEVELS[session.level].color}`}>
                  {LEVELS[session.level].label}
                </span>
                {session.free && (
                  <span className="flex items-center gap-1 text-xs text-yoga-primary font-medium">
                    <SparklesIcon className="w-3 h-3" />
                    Gratuit
                  </span>
                )}
              </div>

              <h3 className="font-display font-semibold text-yoga-text mb-1 group-hover:text-yoga-primary transition-colors">
                {session.title}
              </h3>
              <p className="text-sm text-yoga-text-light mb-3 line-clamp-2">
                {session.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-yoga-text-light">
                <span className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  {Math.floor(session.duration / 60)} min
                </span>
                <span>{session.poses.length} postures</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
