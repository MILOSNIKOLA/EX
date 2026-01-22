'use client'

import { useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  image?: string
}

interface Subscription {
  status: 'active' | 'canceled' | 'past_due' | null
  currentPeriodEnd?: Date
}

interface UseUserReturn {
  user: User | null
  subscription: Subscription | null
  isLoading: boolean
  isAuthenticated: boolean
  isPremium: boolean
}

export function useUser(): UseUserReturn {
  const [user, setUser] = useState<User | null>(null)
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In production, this would fetch from NextAuth session
    // and Supabase for subscription status
    const fetchUser = async () => {
      try {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 500))
        
        // Mock: user is not logged in initially
        setUser(null)
        setSubscription(null)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  const isAuthenticated = !!user
  const isPremium = subscription?.status === 'active'

  return {
    user,
    subscription,
    isLoading,
    isAuthenticated,
    isPremium,
  }
}
