'use client'

import { motion } from 'framer-motion'
import { ClockIcon, PlayCircleIcon } from '@heroicons/react/24/outline'

interface StatsProps {
  totalMinutes: number
  totalSessions: number
}

export default function Stats({ totalMinutes, totalSessions }: StatsProps) {
  const stats = [
    {
      label: 'Temps total',
      value: totalMinutes,
      unit: 'min',
      icon: ClockIcon,
      color: 'bg-sky-100 text-sky-600',
    },
    {
      label: 'Séances',
      value: totalSessions,
      unit: '',
      icon: PlayCircleIcon,
      color: 'bg-emerald-100 text-emerald-600',
    },
  ]

  return (
    <section className="px-6 py-4">
      <h2 className="font-display text-display-md text-yoga-text mb-4">
        Statistiques
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
          >
            <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center mb-3`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-display font-bold text-yoga-text">
              {stat.value}
              {stat.unit && <span className="text-sm font-normal text-yoga-text-light ml-1">{stat.unit}</span>}
            </p>
            <p className="text-sm text-yoga-text-light">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
