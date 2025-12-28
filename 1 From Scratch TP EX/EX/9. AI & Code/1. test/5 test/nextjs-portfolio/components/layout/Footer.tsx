import Link from 'next/link'
import styles from './Footer.module.scss'

const socialLinks = [
  { href: '#', label: 'LinkedIn', ariaLabel: 'LinkedIn' },
  { href: '#', label: 'Twitter', ariaLabel: 'Twitter' },
  { href: '#', label: 'GitHub', ariaLabel: 'GitHub' },
  { href: '#', label: 'Instagram', ariaLabel: 'Instagram' },
]

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/projects', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>MilosNikola</h3>
            <p>Créateur de sites web modernes et professionnels.</p>
          </div>
          <div className={styles.section}>
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <h4>Réseaux sociaux</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.socialLink}
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} MilosNikola. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

