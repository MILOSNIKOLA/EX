'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import FilterBar from '@/components/seance/FilterBar'
import SeanceCard from '@/components/seance/SeanceCard'
import { FREE_SESSIONS } from '@/lib/constants'
import { useFiltersStore } from '@/store/filters'

export default function PratiquerPage() {
  const { level, duration, goal, searchQuery } = useFiltersStore()

  const filteredSessions = useMemo(() => {
    return FREE_SESSIONS.filter((session) => {
      // Level filter
      if (level && session.level !== level) return false
      
      // Duration filter (in minutes)
      if (duration) {
        const sessionMinutes = Math.floor(session.duration / 60)
        if (sessionMinutes !== duration) return false
      }
      
      // Goal filter
      if (goal && session.goal !== goal) return false
      
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = session.title.toLowerCase().includes(query)
        const matchesDescription = session.description.toLowerCase().includes(query)
        if (!matchesTitle && !matchesDescription) return false
      }
      
      return true
    })
  }, [level, duration, goal, searchQuery])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <h1 className="font-display text-display-lg text-yoga-text">
          Pratiquer
        </h1>
        <p className="text-yoga-text-light mt-1">
          Choisis une séance adaptée à ton moment
        </p>
      </header>

      {/* Filters */}
      <FilterBar />

      {/* Sessions grid */}
      <section className="px-6 py-6">
        {filteredSessions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-yoga-text-light">
              Aucune séance ne correspond à tes filtres.
            </p>
            <button
              onClick={() => useFiltersStore.getState().resetFilters()}
              className="mt-4 text-yoga-primary font-medium hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <SeanceCard session={session} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
