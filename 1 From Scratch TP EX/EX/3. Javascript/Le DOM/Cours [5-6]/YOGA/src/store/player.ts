import { create } from 'zustand'

type PlayerStatus = 'idle' | 'playing' | 'paused' | 'completed'

interface PlayerState {
  sessionId: string | null
  status: PlayerStatus
  currentPoseIndex: number
  elapsed: number // in seconds
  
  startSession: (sessionId: string) => void
  play: () => void
  pause: () => void
  complete: () => void
  reset: () => void
  setCurrentPoseIndex: (index: number) => void
  setElapsed: (elapsed: number) => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  sessionId: null,
  status: 'idle',
  currentPoseIndex: 0,
  elapsed: 0,
  
  startSession: (sessionId) => set({ 
    sessionId, 
    status: 'playing', 
    currentPoseIndex: 0, 
    elapsed: 0 
  }),
  
  play: () => set({ status: 'playing' }),
  pause: () => set({ status: 'paused' }),
  complete: () => set({ status: 'completed' }),
  reset: () => set({ 
    sessionId: null, 
    status: 'idle', 
    currentPoseIndex: 0, 
    elapsed: 0 
  }),
  
  setCurrentPoseIndex: (currentPoseIndex) => set({ currentPoseIndex }),
  setElapsed: (elapsed) => set({ elapsed }),
}))
