import { projects } from '@/lib/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import styles from './Projects.module.scss'

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>Mes réalisations</h2>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

