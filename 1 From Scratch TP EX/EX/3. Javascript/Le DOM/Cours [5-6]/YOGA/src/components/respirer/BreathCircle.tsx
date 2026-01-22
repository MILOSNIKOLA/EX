'use client'

import { motion } from 'framer-motion'

interface BreathCircleProps {
  phase: 'inhale' | 'hold' | 'exhale' | 'pause'
  phaseProgress: number
  phaseLabel: string
  isPlaying: boolean
  size?: number
}

const phaseColors = {
  inhale: '#38bdf8', // sky-400
  hold: '#a78bfa',   // violet-400
  exhale: '#34d399', // emerald-400
  pause: '#fbbf24',  // amber-400
}

export default function BreathCircle({
  phase,
  phaseProgress,
  phaseLabel,
  isPlaying,
  size = 280,
}: BreathCircleProps) {
  const circleScale = phase === 'inhale' 
    ? 0.6 + (phaseProgress * 0.4) 
    : phase === 'exhale' 
      ? 1 - (phaseProgress * 0.4) 
      : phase === 'hold' ? 1 : 0.6

  const innerSize = size * 0.7

  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Outer decorative rings */}
      <motion.div
        className="absolute rounded-full border-2 border-yoga-breath/20"
        style={{ width: size, height: size }}
        animate={{
          scale: isPlaying ? [1, 1.05, 1] : 1,
          opacity: isPlaying ? [0.3, 0.5, 0.3] : 0.3,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main breathing circle */}
      <motion.div
        className="absolute rounded-full shadow-lg"
        style={{
          width: innerSize,
          height: innerSize,
          background: `radial-gradient(circle at 30% 30%, ${phaseColors[phase]}40, ${phaseColors[phase]}80)`,
          boxShadow: `0 0 60px ${phaseColors[phase]}40`,
        }}
        animate={{
          scale: isPlaying ? circleScale : 0.6,
        }}
        transition={{
          duration: 0.1,
          ease: 'linear',
        }}
      />

      {/* Inner glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: innerSize * 0.6,
          height: innerSize * 0.6,
          background: `radial-gradient(circle, white 0%, ${phaseColors[phase]}60 100%)`,
        }}
        animate={{
          scale: isPlaying ? circleScale : 0.6,
          opacity: isPlaying ? [0.6, 0.8, 0.6] : 0.6,
        }}
        transition={{
          scale: { duration: 0.1, ease: 'linear' },
          opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Center text */}
      <div className="relative z-10 text-center">
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="font-display text-2xl font-semibold text-white drop-shadow-lg"
        >
          {phaseLabel}
        </motion.p>
      </div>
    </div>
  )
}
