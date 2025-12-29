'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Project } from '@/lib/data/projects'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.image}
        style={{ background: project.gradient }}
      >
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ''}`}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <Link href={project.link} className={styles.link}>
              Voir le projet →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}


