'use client'

import Link from 'next/link'
import { ClockIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { LEVELS, type Level } from '@/lib/constants'

interface Session {
  id: string
  title: string
  description: string
  duration: number
  level: Level
  goal: string
  free: boolean
  poses: string[]
}

interface SeanceCardProps {
  session: Session
}

export default function SeanceCard({ session }: SeanceCardProps) {
  return (
    <Link
      href={`/seance/${session.id}`}
      className="group block p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-yoga-primary/20"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${LEVELS[session.level].color}`}>
          {LEVELS[session.level].label}
        </span>
        {session.free ? (
          <span className="flex items-center gap-1 text-xs text-yoga-primary font-medium">
            <SparklesIcon className="w-3 h-3" />
            Gratuit
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-amber-600 font-medium">
            Premium
          </span>
        )}
      </div>

      <h3 className="font-display font-semibold text-yoga-text mb-1 group-hover:text-yoga-primary transition-colors">
        {session.title}
      </h3>
      <p className="text-sm text-yoga-text-light mb-3 line-clamp-2">
        {session.description}
      </p>

      <div className="flex items-center justify-between text-xs text-yoga-text-light">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            {Math.floor(session.duration / 60)} min
          </span>
          <span>{session.poses.length} postures</span>
        </div>
        <span className="px-2 py-0.5 bg-slate-50 rounded-full">
          {session.goal}
        </span>
      </div>
    </Link>
  )
}
