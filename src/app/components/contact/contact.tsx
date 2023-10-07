import Link from 'next/link'
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import styles from './contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <AiOutlineMail size="2.5rem" />
        <a href="mailto: timothywrliew@gmail.com">Timothywrliew@gmail.com</a>
      </div>
      <div className={styles.social}>
        <AiFillLinkedin size="2.5rem" />
        <Link
          href="https://www.linkedin.com/in/tim-liew-a9572b20b/"
          target="_blank"
        />
        Tim Liew
      </div>
      <div className={styles.social}>
        <Link href="https://github.com/Tweemo" passHref>
          <AiOutlineGithub size="2.5rem" />
        </Link>
        Tweemo
      </div>
    </div>
  )
}
