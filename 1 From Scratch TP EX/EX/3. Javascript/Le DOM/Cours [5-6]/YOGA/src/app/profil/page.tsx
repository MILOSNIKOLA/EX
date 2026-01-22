'use client'

import { motion } from 'framer-motion'
import { UserCircleIcon, FireIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline'
import Streak from '@/components/profil/Streak'
import Stats from '@/components/profil/Stats'
import CTA from '@/components/global/CTA'

// Mock user data - in real app, this would come from Supabase/NextAuth
const mockUser = {
  name: 'Pratiquant',
  email: null,
  isLoggedIn: false,
  streak: 3,
  totalMinutes: 45,
  totalSessions: 5,
  subscription: null,
}

export default function ProfilPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <h1 className="font-display text-display-lg text-yoga-text">
          Profil
        </h1>
        <p className="text-yoga-text-light mt-1">
          Ton parcours de pratique
        </p>
      </header>

      {/* User card */}
      <section className="px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-yoga-primary/10 flex items-center justify-center">
              <UserCircleIcon className="w-10 h-10 text-yoga-primary" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-yoga-text">
                {mockUser.name}
              </h2>
              <p className="text-sm text-yoga-text-light">
                {mockUser.isLoggedIn ? mockUser.email : 'Non connecté'}
              </p>
            </div>
          </div>

          {!mockUser.isLoggedIn && (
            <CTA fullWidth size="sm">
              Se connecter
            </CTA>
          )}
        </motion.div>
      </section>

      {/* Streak */}
      <Streak days={mockUser.streak} />

      {/* Stats */}
      <Stats
        totalMinutes={mockUser.totalMinutes}
        totalSessions={mockUser.totalSessions}
      />

      {/* Subscription */}
      <section className="px-6 py-4">
        <h2 className="font-display text-display-md text-yoga-text mb-4">
          Abonnement
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gradient-to-br from-yoga-primary to-emerald-500 rounded-2xl text-white"
        >
          <h3 className="font-display font-semibold text-xl mb-2">
            Accès Premium
          </h3>
          <p className="text-white/80 text-sm mb-4">
            Débloquez 32 séances supplémentaires, des contenus exclusifs et un suivi personnalisé.
          </p>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold">9,99 €</span>
            <span className="text-white/70">à vie</span>
          </div>
          
          <div className="text-sm text-white/70 mb-4">
            ou 3,99 €/mois
          </div>
          
          <CTA variant="secondary" fullWidth>
            Débloquer Premium
          </CTA>
        </motion.div>
      </section>

      {/* Philosophy articles preview */}
      <section className="px-6 py-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-display-md text-yoga-text">
            Philosophie
          </h2>
          <a
            href="/philosophie"
            className="text-sm font-medium text-yoga-primary hover:underline"
          >
            Voir tout
          </a>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
        >
          <h3 className="font-display font-semibold text-yoga-text mb-1">
            Pourquoi respirer par le nez ?
          </h3>
          <p className="text-sm text-yoga-text-light">
            2 min de lecture
          </p>
        </motion.div>
      </section>
    </div>
  )
}
