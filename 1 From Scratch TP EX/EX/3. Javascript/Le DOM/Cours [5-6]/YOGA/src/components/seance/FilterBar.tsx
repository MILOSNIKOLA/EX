'use client'

import { LEVELS, GOALS, type Level, type Goal } from '@/lib/constants'
import { useFiltersStore } from '@/store/filters'

const DURATIONS = [2, 5, 10, 20] // in minutes

export default function FilterBar() {
  const { level, duration, goal, setLevel, setDuration, setGoal, resetFilters } = useFiltersStore()

  const hasFilters = level || duration || goal

  return (
    <div className="px-6 py-4 space-y-4 border-b border-slate-100">
      {/* Level chips */}
      <div>
        <p className="text-xs text-yoga-text-light uppercase tracking-wider mb-2">Niveau</p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(LEVELS) as Level[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(level === lvl ? null : lvl)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                level === lvl
                  ? 'bg-yoga-primary text-white'
                  : 'bg-slate-100 text-yoga-text-light hover:bg-slate-200'
              }`}
            >
              {LEVELS[lvl].label}
            </button>
          ))}
        </div>
      </div>

      {/* Duration chips */}
      <div>
        <p className="text-xs text-yoga-text-light uppercase tracking-wider mb-2">Durée</p>
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((dur) => (
            <button
              key={dur}
              onClick={() => setDuration(duration === dur ? null : dur)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                duration === dur
                  ? 'bg-yoga-primary text-white'
                  : 'bg-slate-100 text-yoga-text-light hover:bg-slate-200'
              }`}
            >
              {dur} min
            </button>
          ))}
        </div>
      </div>

      {/* Goal chips */}
      <div>
        <p className="text-xs text-yoga-text-light uppercase tracking-wider mb-2">Objectif</p>
        <div className="flex flex-wrap gap-2">
          {GOALS.slice(0, 5).map((g) => (
            <button
              key={g}
              onClick={() => setGoal(goal === g ? null : g)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                goal === g
                  ? 'bg-yoga-primary text-white'
                  : 'bg-slate-100 text-yoga-text-light hover:bg-slate-200'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Reset button */}
      {hasFilters && (
        <button
          onClick={resetFilters}
          className="text-sm text-yoga-primary font-medium hover:underline"
        >
          Réinitialiser les filtres
        </button>
      )}
    </div>
  )
}
