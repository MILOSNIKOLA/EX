import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Session {
  id: string
  title: string
  duration: number
  level: 'easy' | 'medium' | 'hard' | 'extremeHard'
  goal: string
  type: string
  free: boolean
  poses: string[]
  created_at: string
}

export interface UserSession {
  user_id: string
  session_id: string
  completed: boolean
  duration: number
  created_at: string
}

export interface Subscription {
  user_id: string
  status: 'active' | 'canceled' | 'past_due'
  price_id: string
  current_period_end: string
}
