import styles from './techStack.module.scss'
import TechCard, { TechSize, TechGradient } from './tech-card'

const tech: { name: string; size?: TechSize; gradient: TechGradient }[] = [
  { name: 'Next.js', size: 'lg', gradient: 'pink' },
  { name: 'PHP', size: 'lg', gradient: 'purple' },
  { name: 'TypeScript', size: 'md', gradient: 'cyan' },
  { name: 'Go', size: 'md', gradient: 'teal' },
  { name: 'Vue', size: 'md', gradient: 'green' },
  { name: 'GraphQL', size: 'md', gradient: 'rose' },
  { name: 'PostgreSQL', size: 'md', gradient: 'indigo' },
  { name: 'React', size: 'md', gradient: 'blue' },
  { name: 'Algolia', size: 'sm', gradient: 'amber' },
  { name: 'MySQL', size: 'sm', gradient: 'sky' },
  { name: 'MariaDB', size: 'sm', gradient: 'orange' },
  { name: 'MS SQL', size: 'sm', gradient: 'red' },
]

export default function TechStack() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Tech I like to work with</h1>
      <div className={styles.grid}>
        {tech.map((t) => (
          <TechCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  )
}
