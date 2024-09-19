'use client'

import styles from './backpage.module.scss'
import Contact from '../contact/contact'
import clsx from 'clsx'

export default function BackPage({
  className,
  handleFlip,
}: {
  className: string
  handleFlip: () => void
}) {
  return (
    <button className={clsx(styles.container, className)} onClick={handleFlip}>
      <div className={styles.content}>
        <div>
          <h2>Active Learning Objectives</h2>
          <ul>
            <li>Learn the basics of Docker and use it for development</li>
            <li>Build foundational knowledge of C# and .NET</li>
            <li>Learn and build an app with React Native</li>
          </ul>
        </div>
        <Contact />
      </div>

      <h3>Click anywhere to flip</h3>
    </button>
  )
}
