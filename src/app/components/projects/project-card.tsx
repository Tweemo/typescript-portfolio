import Image from 'next/image'
import clsx from 'clsx'
import styles from './project-card.module.scss'
import Pill from '../pill/pill'

interface ProjectCardProps {
  name: string
  description: string
  tech: string[]
  link: string
  image?: any
  image_alt?: string
}

export default function ProjectCard({
  name,
  description,
  tech,
  link,
  image,
  image_alt,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.projectCard}
    >
      {image && image_alt && (
        <Image
          className={clsx(styles.image, styles[name])}
          src={image}
          alt={image_alt}
          width={200}
          height={200}
        />
      )}
      <div style={{ padding: '1rem 2rem' }}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={styles.tech}>
          {tech.map((t, i) => (
            <Pill key={i} text={t} />
          ))}
        </div>
      </div>
    </a>
  )
}
