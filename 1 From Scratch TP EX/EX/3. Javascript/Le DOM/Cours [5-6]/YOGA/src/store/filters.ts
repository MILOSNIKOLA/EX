import { create } from 'zustand'
import type { Level, Goal } from '@/lib/constants'

interface FiltersState {
  level: Level | null
  duration: number | null // in minutes
  goal: Goal | null
  searchQuery: string
  
  setLevel: (level: Level | null) => void
  setDuration: (duration: number | null) => void
  setGoal: (goal: Goal | null) => void
  setSearchQuery: (query: string) => void
  resetFilters: () => void
}

export const useFiltersStore = create<FiltersState>((set) => ({
  level: null,
  duration: null,
  goal: null,
  searchQuery: '',
  
  setLevel: (level) => set({ level }),
  setDuration: (duration) => set({ duration }),
  setGoal: (goal) => set({ goal }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  resetFilters: () => set({ level: null, duration: null, goal: null, searchQuery: '' }),
}))
