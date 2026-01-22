'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeftIcon, PlayIcon, PauseIcon, ArrowPathIcon, CheckIcon } from '@heroicons/react/24/solid'
import Timer from '@/components/global/Timer'
import PoseItem from '@/components/seance/PoseItem'
import { FREE_SESSIONS } from '@/lib/constants'
import { useTimer } from '@/hooks/useTimer'
import CTA from '@/components/global/CTA'

export default function SeancePage() {
  const params = useParams()
  const router = useRouter()
  const sessionId = params.id as string
  
  const session = FREE_SESSIONS.find((s) => s.id === sessionId)
  
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  
  const poseCount = session?.poses.length || 1
  const poseDuration = session ? Math.floor(session.duration / poseCount) : 30
  
  const {
    elapsed,
    remaining,
    progress,
    isPlaying,
    start,
    pause,
    reset,
    toggle,
    playBell,
  } = useTimer({
    duration: poseDuration,
    onComplete: () => {
      playBell()
      if (currentPoseIndex < poseCount - 1) {
        setCurrentPoseIndex((prev) => prev + 1)
        reset()
        start()
      } else {
        setIsCompleted(true)
      }
    },
  })

  // Reset timer when pose changes
  useEffect(() => {
    reset()
  }, [currentPoseIndex])

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-yoga-text-light mb-4">Séance introuvable</p>
          <CTA onClick={() => router.push('/pratiquer')}>
            Retour aux séances
          </CTA>
        </div>
      </div>
    )
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-yoga-bg to-yoga-primary/10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="w-24 h-24 rounded-full bg-yoga-primary flex items-center justify-center mb-6"
        >
          <CheckIcon className="w-12 h-12 text-white" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-display-lg text-yoga-text text-center mb-2"
        >
          Bravo !
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-yoga-text-light text-center mb-8"
        >
          Tu as terminé « {session.title} »
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          <CTA onClick={() => router.push('/pratiquer')} fullWidth>
            Nouvelle séance
          </CTA>
          <CTA onClick={() => router.push('/')} variant="outline" fullWidth>
            Retour à l&apos;accueil
          </CTA>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-yoga-bg">
      {/* Header */}
      <header className="flex items-center gap-4 px-4 py-4 bg-white border-b border-slate-100">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="font-display font-semibold text-yoga-text">
            {session.title}
          </h1>
          <p className="text-sm text-yoga-text-light">
            Posture {currentPoseIndex + 1} sur {poseCount}
          </p>
        </div>
      </header>

      {/* Progress bar */}
      <div className="h-1 bg-slate-100">
        <motion.div
          className="h-full bg-yoga-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentPoseIndex + progress) / poseCount) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Timer */}
        <Timer
          duration={poseDuration}
          isPlaying={isPlaying}
          size="lg"
          showCircle
        />

        {/* Current pose */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPoseIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="mt-8 text-center"
          >
            <h2 className="font-display text-display-md text-yoga-text mb-2">
              {session.poses[currentPoseIndex]}
            </h2>
            <p className="text-yoga-text-light">
              Respire profondément et sens ton corps
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="px-6 py-8 bg-white border-t border-slate-100">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => {
              if (currentPoseIndex > 0) {
                setCurrentPoseIndex((prev) => prev - 1)
              }
            }}
            disabled={currentPoseIndex === 0}
            className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors disabled:opacity-40"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          
          <button
            onClick={toggle}
            className="w-20 h-20 rounded-full bg-yoga-primary flex items-center justify-center text-white shadow-lg hover:bg-yoga-primary-dark transition-colors"
          >
            {isPlaying ? (
              <PauseIcon className="w-10 h-10" />
            ) : (
              <PlayIcon className="w-10 h-10 ml-1" />
            )}
          </button>
          
          <button
            onClick={() => {
              if (currentPoseIndex < poseCount - 1) {
                setCurrentPoseIndex((prev) => prev + 1)
              }
            }}
            disabled={currentPoseIndex === poseCount - 1}
            className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors disabled:opacity-40 rotate-180"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Pose list */}
      <div className="px-6 pb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {session.poses.map((pose, index) => (
            <button
              key={index}
              onClick={() => setCurrentPoseIndex(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === currentPoseIndex
                  ? 'bg-yoga-primary text-white'
                  : index < currentPoseIndex
                    ? 'bg-yoga-primary/20 text-yoga-primary'
                    : 'bg-slate-100 text-yoga-text-light'
              }`}
            >
              {index + 1}. {pose}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
