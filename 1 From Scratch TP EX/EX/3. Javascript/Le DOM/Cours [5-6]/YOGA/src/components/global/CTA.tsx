'use client'

import { motion } from 'framer-motion'
import { Button } from '@headlessui/react'

interface CTAProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
  className?: string
}

const variants = {
  primary: 'bg-yoga-primary text-white hover:bg-yoga-primary-dark data-[disabled]:bg-slate-300',
  secondary: 'bg-yoga-secondary text-white hover:bg-amber-600 data-[disabled]:bg-slate-300',
  outline: 'bg-transparent text-yoga-primary border-2 border-yoga-primary hover:bg-yoga-primary hover:text-white data-[disabled]:border-slate-300 data-[disabled]:text-slate-300',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function CTA({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
}: CTAProps) {
  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? 'w-full' : ''}
          rounded-full font-semibold transition-all duration-300 ease-out
          focus:outline-none focus:ring-2 focus:ring-yoga-primary focus:ring-offset-2
          ${className}
        `}
      >
        {children}
      </Button>
    </motion.div>
  )
}
