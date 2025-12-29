import Button from '@/components/ui/Button'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.background}>
        <div className={styles.gradient}></div>
        <div className={styles.shapes}>
          <div className={`${styles.shape} ${styles.shape1}`}></div>
          <div className={`${styles.shape} ${styles.shape2}`}></div>
          <div className={`${styles.shape} ${styles.shape3}`}></div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>✨ Innovation & Créativité</div>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Bienvenue sur</span>
            <span className={`${styles.titleLine} ${styles.highlight}`}>mon site</span>
          </h1>
          <p className={styles.subtitle}>
            Je crée des expériences web modernes, professionnelles et élégantes qui marquent les esprits
          </p>
          <div className={styles.buttons}>
            <Button href="/contact" variant="primary">
              Me contacter
            </Button>
            <Button href="/projects" variant="secondary">
              Voir mes réalisations
            </Button>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.shape}>
            <div className={styles.glow}></div>
          </div>
        </div>
      </div>
    </section>
  )
}


