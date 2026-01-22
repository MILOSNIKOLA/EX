'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import BreathCircle from '@/components/respirer/BreathCircle'
import { useBreath } from '@/hooks/useBreath'
import { BREATHING_EXERCISES } from '@/lib/constants'
import CTA from '@/components/global/CTA'

export default function RespirerPage() {
  const [selectedExercise, setSelectedExercise] = useState(BREATHING_EXERCISES[0])

  const { 
    phase, 
    phaseLabel, 
    phaseProgress, 
    isPlaying, 
    cycleCount,
    toggle, 
    reset 
  } = useBreath({
    pattern: {
      inhale: selectedExercise.inhale,
      hold: selectedExercise.hold,
      exhale: selectedExercise.exhale,
      pause: selectedExercise.pause,
    },
  })

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <h1 className="font-display text-display-lg text-yoga-text">
          Respirer
        </h1>
        <p className="text-yoga-text-light mt-1">
          Accueille ton souffle, calme ton esprit
        </p>
      </header>

      {/* Exercise selector */}
      <div className="px-6 pb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {BREATHING_EXERCISES.map((exercise) => (
            <button
              key={exercise.id}
              onClick={() => {
                reset()
                setSelectedExercise(exercise)
              }}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedExercise.id === exercise.id
                  ? 'bg-yoga-primary text-white'
                  : 'bg-white text-yoga-text-light border border-slate-200 hover:border-yoga-primary/50'
              }`}
            >
              {exercise.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main breathing area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 bg-gradient-to-b from-yoga-bg to-yoga-breath-light">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BreathCircle
            phase={phase}
            phaseProgress={phaseProgress}
            phaseLabel={phaseLabel}
            isPlaying={isPlaying}
          />
        </motion.div>

        {/* Cycle counter */}
        {cycleCount > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-yoga-text-light text-sm"
          >
            {cycleCount} cycle{cycleCount > 1 ? 's' : ''} complété{cycleCount > 1 ? 's' : ''}
          </motion.p>
        )}

        {/* Pattern display */}
        <div className="mt-6 flex items-center gap-3 text-sm text-yoga-text-light">
          <span className="px-3 py-1 bg-white/50 rounded-full">
            {selectedExercise.inhale}s inspire
          </span>
          {selectedExercise.hold > 0 && (
            <span className="px-3 py-1 bg-white/50 rounded-full">
              {selectedExercise.hold}s retient
            </span>
          )}
          <span className="px-3 py-1 bg-white/50 rounded-full">
            {selectedExercise.exhale}s expire
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 py-8 bg-white border-t border-slate-100">
        <div className="max-w-md mx-auto">
          <p className="text-center text-yoga-text-light text-sm mb-4">
            {selectedExercise.description}
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={reset}
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <ArrowPathIcon className="w-5 h-5" />
            </button>
            
            <button
              onClick={toggle}
              className="w-16 h-16 rounded-full bg-yoga-primary flex items-center justify-center text-white shadow-lg hover:bg-yoga-primary-dark transition-colors"
            >
              {isPlaying ? (
                <PauseIcon className="w-8 h-8" />
              ) : (
                <PlayIcon className="w-8 h-8 ml-1" />
              )}
            </button>
            
            <div className="w-12 h-12" /> {/* Spacer for symmetry */}
          </div>
        </div>
      </div>
    </div>
  )
}
