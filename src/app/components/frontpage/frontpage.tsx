'use client'

import Image from 'next/image'
import styles from './frontpage.module.scss'
import Profile from '/public/images/profile_pic.jpg'
import Contact from '../contact/contact'
import clsx from 'clsx'

export default function FrontPage({
  className,
  handleFlip,
}: {
  className: string
  handleFlip: () => void
}) {
  return (
    <div className={clsx(styles.container, className)} onClick={handleFlip}>
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
            <span>
              I am passionate about building solutions that helps solve problems
              at scale.
            </span>
            <span>
              I enjoy collaborating with cross-functional teams and creating a
              performant and enjoyable environment.
            </span>
            <span>I thrive when given the opportunity to learn and grow.</span>
          </p>
        </div>
      </div>
      <Contact />
      {/* <h3>Click anywhere to flip</h3> */}
    </div>
  )
}
