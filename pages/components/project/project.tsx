import Image from 'next/image'
import Link from 'next/link'
import styles from './project.module.scss'

export interface ProjectProps {
  id?: number
  title: string
  description: string
  github: string
  app: string
  images: string
  state: string
}

export default function Project({
  title,
  description,
  github,
  app,
  images,
  state,
}: ProjectProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={images}
        alt={title}
        height={300}
        width={400}
      />
      <h2>{title}</h2>
      <div>{description}</div>
      <Link href={github} target="_blank">
        <button>Repo</button>
      </Link>
      <Link href={app} target="_blank">
        <button>App</button>
      </Link>
      <div>State: {state}</div>
    </div>
  )
}
