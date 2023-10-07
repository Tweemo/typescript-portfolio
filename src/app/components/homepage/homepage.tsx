import Image from 'next/image'
import styles from './homepage.module.scss'
import Profile from '/public/images/pic.jpg'

export default function Homepage() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.pic}
        src={Profile}
        alt="me"
        width={400}
        height={400}
      />
      <div className={styles.content}>
        <h1>This is me.</h1>
        <div>
          I&apos;m a <del>Pharmacist</del> Web Developer.
        </div>
        <h2>About me</h2>
        <div className={styles.description}>
          <span>
            I decided to become a web developer because I felt like I was
            plateauing and wasn&apos;t going anywhere as a Pharmacist. Since
            becoming a developer, I have found excitement at the thought of
            being able to build anything that I can think of.
          </span>
          <span>
            I tend to build projects that either solve inconveniences or are
            just cool. I figured if it makes my life easier, then it could make
            somebody else&apos;s easier too.
          </span>
        </div>
      </div>
    </div>
  )
}
