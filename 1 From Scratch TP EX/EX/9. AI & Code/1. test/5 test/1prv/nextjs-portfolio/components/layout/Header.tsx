'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import styles from './Header.module.scss'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            MilosNikola <span className={styles.version}>version 2.0</span>
          </Link>
          <Navigation currentPath={pathname} />
        </div>
      </div>
    </header>
  )
}


