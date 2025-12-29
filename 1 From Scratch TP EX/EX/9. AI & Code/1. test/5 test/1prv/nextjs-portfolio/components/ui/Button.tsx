import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  )
}


