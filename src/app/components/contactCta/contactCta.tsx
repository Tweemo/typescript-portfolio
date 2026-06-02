import { AiOutlineMail } from 'react-icons/ai'
import styles from './contactCta.module.scss'

export default function ContactCta() {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.card}>
        <span className={styles.emojiTop}>👋</span>
        <span className={styles.emojiBottom}>✨</span>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            Let&apos;s build
            <br />
            something great
          </h2>
          <p className={styles.subtitle}>
            Always excited to collaborate on interesting projects
          </p>
          <a href="mailto:timothywrliew@gmail.com" className={styles.button}>
            <AiOutlineMail size="1.25rem" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
