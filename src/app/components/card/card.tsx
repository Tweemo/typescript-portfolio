'use client'

import { useState } from 'react'
import BackPage from '../backpage/backpage'
import FrontPage from '../frontpage/frontpage'
import styles from './card.module.scss'

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(true)

  function handleFlip() {
    document
      .querySelector(`.${styles.cardInner}`)
      ?.setAttribute(
        'style',
        `transform: rotateY(${isFlipped ? '180deg' : '0deg'})`
      )
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={styles.home}>
      <div className={styles.cardInner}>
        <FrontPage className={styles.cardFront} handleFlip={handleFlip} />
        <BackPage className={styles.cardBack} handleFlip={handleFlip} />
      </div>
    </div>
  )
}
