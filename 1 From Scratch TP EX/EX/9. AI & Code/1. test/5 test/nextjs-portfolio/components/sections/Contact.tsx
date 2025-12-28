'use client'

import { FormEvent, useState } from 'react'
import Button from '@/components/ui/Button'
import styles from './Contact.module.scss'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = {
      name: (e.currentTarget.name as HTMLInputElement).value,
      email: (e.currentTarget.email as HTMLInputElement).value,
      subject: (e.currentTarget.subject as HTMLInputElement).value,
      message: (e.currentTarget.message as HTMLTextAreaElement).value,
    }

    // Simuler l'envoi (remplacer par un appel API réel)
    setTimeout(() => {
      console.log('Form data:', formData)
      setIsSubmitting(false)
      setSubmitStatus('success')
      e.currentTarget.reset()
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h2 className={styles.title}>Travaillons ensemble</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Informations de contact</h3>
            <p>N'hésitez pas à me contacter pour discuter de votre projet.</p>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <strong>Email:</strong>
                <a href="mailto:contact@monsite.com">contact@monsite.com</a>
              </div>
              <div className={styles.detailItem}>
                <strong>Téléphone:</strong>
                <a href="tel:+33123456789">+33 1 23 45 67 89</a>
              </div>
              <div className={styles.detailItem}>
                <strong>Adresse:</strong>
                <span>123 Rue Example, 75000 Paris, France</span>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nom complet</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            {submitStatus === 'success' && (
              <div className={styles.success}>Message envoyé avec succès !</div>
            )}
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

