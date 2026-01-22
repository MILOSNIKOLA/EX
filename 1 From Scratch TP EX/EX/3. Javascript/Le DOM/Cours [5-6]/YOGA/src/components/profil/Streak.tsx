'use client'

import { motion } from 'framer-motion'
import { FireIcon } from '@heroicons/react/24/solid'

interface StreakProps {
  days: number
}

export default function Streak({ days }: StreakProps) {
  // Get last 7 days for display
  const today = new Date()
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today)
    date.setDate(date.getDate() - (6 - i))
    return {
      day: date.toLocaleDateString('fr-FR', { weekday: 'short' }).charAt(0).toUpperCase(),
      isActive: i >= 7 - days,
      isToday: i === 6,
    }
  })

  return (
    <section className="px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <FireIcon className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <p className="text-sm text-yoga-text-light">Régularité douce</p>
            <p className="font-display font-semibold text-yoga-text">
              {days} jour{days > 1 ? 's' : ''} consécutif{days > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          {weekDays.map((day, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className="text-xs text-yoga-text-light">{day.day}</span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  day.isActive
                    ? 'bg-yoga-primary text-white'
                    : 'bg-slate-100 text-slate-400'
                } ${day.isToday ? 'ring-2 ring-yoga-primary ring-offset-2' : ''}`}
              >
                {day.isActive && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-yoga-text-light text-center">
          Chaque jour compte, sans pression ✨
        </p>
      </motion.div>
    </section>
  )
}
