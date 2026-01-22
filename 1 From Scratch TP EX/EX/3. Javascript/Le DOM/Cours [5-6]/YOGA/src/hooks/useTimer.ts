'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface UseTimerOptions {
  duration: number // in seconds
  onTick?: (elapsed: number, remaining: number) => void
  onComplete?: () => void
  autoStart?: boolean
}

export function useTimer({ duration, onTick, onComplete, autoStart = false }: UseTimerOptions) {
  const [elapsed, setElapsed] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoStart)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const onCompleteRef = useRef(onComplete)
  const onTickRef = useRef(onTick)

  // Keep refs updated
  useEffect(() => {
    onCompleteRef.current = onComplete
    onTickRef.current = onTick
  }, [onComplete, onTick])

  const remaining = Math.max(0, duration - elapsed)
  const progress = elapsed / duration

  const start = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const pause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const reset = useCallback(() => {
    setElapsed(0)
    setIsPlaying(false)
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

    intervalRef.current = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1
        const newRemaining = Math.max(0, duration - next)
        
        onTickRef.current?.(next, newRemaining)
        
        if (next >= duration) {
          clearInterval(intervalRef.current!)
          intervalRef.current = null
          setIsPlaying(false)
          onCompleteRef.current?.()
          return duration
        }
        return next
      })
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPlaying, duration])

  // Play a soft bell sound
  const playBell = useCallback(() => {
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      const audioContext = new AudioContext()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.value = 440 // Hz - soft bell
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5)
      
      oscillator.start()
      oscillator.stop(audioContext.currentTime + 1.5)
    }
  }, [])

  return {
    elapsed,
    remaining,
    progress,
    isPlaying,
    start,
    pause,
    reset,
    toggle,
    playBell,
  }
}
