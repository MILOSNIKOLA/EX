'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

type BreathPhase = 'inhale' | 'hold' | 'exhale' | 'pause'

interface BreathPattern {
  inhale: number // seconds
  hold: number
  exhale: number
  pause: number
}

interface UseBreathOptions {
  pattern: BreathPattern
  onPhaseChange?: (phase: BreathPhase) => void
  autoStart?: boolean
}

export function useBreath({ pattern, onPhaseChange, autoStart = false }: UseBreathOptions) {
  const [phase, setPhase] = useState<BreathPhase>('inhale')
  const [phaseProgress, setPhaseProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoStart)
  const [cycleCount, setCycleCount] = useState(0)
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const onPhaseChangeRef = useRef(onPhaseChange)

  useEffect(() => {
    onPhaseChangeRef.current = onPhaseChange
  }, [onPhaseChange])

  const getPhaseDuration = useCallback((p: BreathPhase): number => {
    return pattern[p]
  }, [pattern])

  const getNextPhase = useCallback((currentPhase: BreathPhase): BreathPhase => {
    const phases: BreathPhase[] = ['inhale', 'hold', 'exhale', 'pause']
    const currentIndex = phases.indexOf(currentPhase)
    
    // Skip phases with 0 duration
    for (let i = 1; i <= 4; i++) {
      const nextIndex = (currentIndex + i) % 4
      const nextPhase = phases[nextIndex]
      if (pattern[nextPhase] > 0) {
        return nextPhase
      }
    }
    return 'inhale'
  }, [pattern])

  const playSound = useCallback((soundPhase: BreathPhase) => {
    if (typeof window === 'undefined' || !('AudioContext' in window)) return

    const audioContext = new AudioContext()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // Different frequencies for inhale/exhale
    oscillator.frequency.value = soundPhase === 'inhale' ? 528 : 432 // Hz
    oscillator.type = 'sine'

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

    oscillator.start()
    oscillator.stop(audioContext.currentTime + 0.3)
  }, [])

  const vibrate = useCallback(() => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(50)
    }
  }, [])

  const start = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const pause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const reset = useCallback(() => {
    setPhase('inhale')
    setPhaseProgress(0)
    setIsPlaying(false)
    setCycleCount(0)
  }, [])

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    const phaseDuration = getPhaseDuration(phase)
    if (phaseDuration === 0) {
      // Skip to next phase immediately
      const nextPhase = getNextPhase(phase)
      setPhase(nextPhase)
      setPhaseProgress(0)
      onPhaseChangeRef.current?.(nextPhase)
      return
    }

    const tickDuration = 100 // ms
    const progressIncrement = tickDuration / (phaseDuration * 1000)

    intervalRef.current = setInterval(() => {
      setPhaseProgress((prev) => {
        const next = prev + progressIncrement
        
        if (next >= 1) {
          const nextPhase = getNextPhase(phase)
          
          // Track cycles
          if (nextPhase === 'inhale' && phase !== 'inhale') {
            setCycleCount((c) => c + 1)
          }
          
          setPhase(nextPhase)
          onPhaseChangeRef.current?.(nextPhase)
          playSound(nextPhase)
          vibrate()
          
          return 0
        }
        return next
      })
    }, tickDuration)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPlaying, phase, getPhaseDuration, getNextPhase, playSound, vibrate])

  // Initial sound on start
  useEffect(() => {
    if (isPlaying && phaseProgress === 0) {
      playSound(phase)
      vibrate()
    }
  }, [isPlaying])

  const phaseLabel: Record<BreathPhase, string> = {
    inhale: 'Inspire',
    hold: 'Retiens',
    exhale: 'Expire',
    pause: 'Pause',
  }

  return {
    phase,
    phaseLabel: phaseLabel[phase],
    phaseProgress,
    isPlaying,
    cycleCount,
    start,
    pause,
    reset,
    toggle,
  }
}
