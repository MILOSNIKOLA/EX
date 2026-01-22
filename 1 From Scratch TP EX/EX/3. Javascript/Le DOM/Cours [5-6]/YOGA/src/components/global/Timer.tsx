'use client'

import { useEffect, useState } from 'react'

interface TimerProps {
  duration: number // in seconds
  isPlaying: boolean
  onComplete?: () => void
  size?: 'sm' | 'md' | 'lg'
  showCircle?: boolean
}

const sizeMap = {
  sm: { container: 80, stroke: 4, text: 'text-lg' },
  md: { container: 120, stroke: 6, text: 'text-2xl' },
  lg: { container: 180, stroke: 8, text: 'text-4xl' },
}

export default function Timer({
  duration,
  isPlaying,
  onComplete,
  size = 'md',
  showCircle = true,
}: TimerProps) {
  const [elapsed, setElapsed] = useState(0)
  const remaining = Math.max(0, duration - elapsed)
  
  const { container, stroke, text } = sizeMap[size]
  const radius = (container - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const progress = elapsed / duration
  const strokeDashoffset = circumference * (1 - progress)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1
        if (next >= duration) {
          clearInterval(interval)
          onComplete?.()
          return duration
        }
        return next
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, duration, onComplete])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (!showCircle) {
    return (
      <span className={`font-display font-semibold ${text} text-yoga-text`}>
        {formatTime(remaining)}
      </span>
    )
  }

  return (
    <div className="relative flex items-center justify-center" style={{ width: container, height: container }}>
      <svg
        width={container}
        height={container}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={container / 2}
          cy={container / 2}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={stroke}
        />
        {/* Progress circle */}
        <circle
          cx={container / 2}
          cy={container / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-yoga-primary transition-all duration-1000 ease-out"
        />
      </svg>
      <span className={`absolute font-display font-semibold ${text} text-yoga-text`}>
        {formatTime(remaining)}
      </span>
    </div>
  )
}
