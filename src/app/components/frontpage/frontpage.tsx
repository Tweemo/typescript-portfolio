'use client'

import Image from 'next/image'
import styles from './frontpage.module.scss'
import Profile from '/public/images/pic.jpg'
import clsx from 'clsx'

export default function FrontPage({
  className,
  handleFlip,
}: {
  className: string
  handleFlip: () => void
}) {
  return (
    <button className={clsx(styles.container, className)} onClick={handleFlip}>
      <div className={styles.content}>
        <Image
          className={styles.pic}
          src={Profile}
          alt="me"
          width={400}
          height={400}
        />
        <div>
          <h1>Tim Liew</h1>
          <h2>Software Engineer</h2>
          <p className={styles.description}>
            I am passionate about building software that solves real-world
            problems and creating innovative solutions. I thrive on continuous
            learning and enjoy collaborating with others to share knowledge and
            expertise.
          </p>
        </div>
      </div>
      <h3>Click anywhere to flip</h3>
    </button>
  )
}
