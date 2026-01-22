'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SparklesIcon, PlayCircleIcon, SunIcon } from '@heroicons/react/24/outline'
import { FREE_SESSIONS } from '@/lib/constants'

const quickActions = [
  {
    href: '/seance/easy-1',
    title: 'Séance du jour',
    description: 'Réveil doux • 2 min',
    icon: SunIcon,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    href: '/respirer',
    title: 'Respiration',
    description: 'Cohérence cardiaque',
    icon: SparklesIcon,
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    href: '/seance/medium-2',
    title: 'Étirement',
    description: "Dos d'eau • 5 min",
    icon: PlayCircleIcon,
    gradient: 'from-emerald-400 to-teal-500',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function QuickAccess() {
  return (
    <section className="px-6 py-8">
      <h2 className="font-display text-display-md text-yoga-text mb-6">
        Accès rapide
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4"
      >
        {quickActions.map((action) => (
          <motion.div key={action.href} variants={item}>
            <Link
              href={action.href}
              className="group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-yoga-primary/20"
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center`}>
                <action.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-yoga-text group-hover:text-yoga-primary transition-colors">
                  {action.title}
                </h3>
                <p className="text-sm text-yoga-text-light truncate">
                  {action.description}
                </p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-yoga-primary/10 transition-colors">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-yoga-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
