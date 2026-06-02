import Image from 'next/image'
import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import styles from './project-card.module.scss'
import Pill from '../pill/pill'

interface ProjectCardProps {
  name: string
  description: string
  tech: string[]
  link: string
  image?: any
  image_alt?: string
  index?: number
}

export default function ProjectCard({
  name,
  description,
  tech,
  link,
  image,
  image_alt,
  index = 0,
}: ProjectCardProps) {
  const reversed = index % 2 !== 0

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.card, reversed && styles.reversed)}
    >
      <div className={clsx(styles.media, styles[name])}>
        {image && image_alt ? (
          <Image
            className={styles.image}
            src={image}
            alt={image_alt}
            width={400}
            height={300}
          />
        ) : (
          <span className={styles.mediaInitial}>{name.charAt(0)}</span>
        )}
      </div>

      <div className={styles.body}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.tech}>
          {tech.map((t, i) => (
            <Pill key={i} text={t} />
          ))}
        </div>
        <span className={styles.view}>
          View site
          <ArrowUpRight size="1.25rem" />
        </span>
      </div>
    </a>
  )
}
