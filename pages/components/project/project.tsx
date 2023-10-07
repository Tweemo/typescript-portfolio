import Image from 'next/image'
import Link from 'next/link'
import styles from './project.module.scss'

interface ProjectProps {
  title: string
  description: string
  github: string
  app: string
  images: string
  state: string
}

export default function OneProject({
  title,
  description,
  github,
  app,
  images,
  state,
}: ProjectProps) {
  return (
    <>
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
      {app === '#' ? (
        <Link href={app}>
          <button>App</button>
        </Link>
      ) : (
        <Link href={app} target="_blank">
          <button>App</button>
        </Link>
      )}{' '}
      <div>State: {state}</div>
    </>
  )
}
