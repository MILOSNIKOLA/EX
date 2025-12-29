'use client'

import { useEffect, useRef } from 'react'
import { values, quotes, timeline, experienceYears } from '@/lib/data/about'
import styles from './About.module.scss'

export default function About() {
  const yearRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (yearRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement
              const target = experienceYears
              animateCounter(element, target)
              observer.unobserve(element)
            }
          })
        },
        { threshold: 0.5 }
      )
      observer.observe(yearRef.current)
      return () => observer.disconnect()
    }
  }, [])

  const animateCounter = (element: HTMLElement, target: number) => {
    const duration = 2500
    let startTime: number | null = null
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const current = Math.floor(target * easedProgress)
      element.textContent = current.toString()
      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target.toString()
      }
    }
    requestAnimationFrame(updateCounter)
  }

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>À propos</span>
          <h2 className={styles.title}>Qui suis-je ?</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <h3>Qui suis-je ?</h3>
            <p>
              Passionné par le web et le design, je crée des sites web modernes et performants qui
              répondent aux besoins de mes clients. Mon approche combine créativité, expertise
              technique et attention aux détails.
            </p>
            <p>
              Avec {experienceYears} années d'expérience dans le développement web, je mets mes compétences
              au service de votre projet pour créer une présence en ligne qui vous ressemble et qui
              convertit.
            </p>
          </div>

          <div className={styles.experienceCard}>
            <div ref={yearRef} className={styles.yearNumber}>
              0
            </div>
            <div className={styles.yearLabel}>Années d'expérience</div>
          </div>
        </div>

        {/* Citations */}
        <div className={styles.quotes}>
          {quotes.map((quote, index) => (
            <blockquote key={index} className={styles.quote}>
              <p className={styles.quoteText}>"{quote.text}"</p>
              {quote.author && (
                <cite className={styles.quoteAuthor}>— {quote.author}</cite>
              )}
            </blockquote>
          ))}
        </div>

        {/* Valeurs */}
        <div className={styles.values}>
          <h3 className={styles.valuesTitle}>Mes valeurs</h3>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <h3 className={styles.timelineTitle}>Mon parcours</h3>
          <div className={styles.timelineList}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

