import Image from 'next/image'
import clsx from 'clsx'
import { Sparkles, ArrowDownRight } from 'lucide-react'
import styles from './basicInfo.module.scss'
import Contact from '../contact/contact'

export default function BasicInfo({ className }: { className?: string }) {
  return (
    <div className={clsx(styles.root, className)}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>
            <Sparkles size="1.25rem" color="#fff" />
          </span>
          <img src="/images/TL_Logo.png" alt="TL Logo" width={24} height={24} />
        </div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <h1 className={styles.headline}>
          Tim builds <span className={styles.gradient}>efficient</span>
          <br />
          systems
        </h1>

        <div className={styles.intro}>
          <Image
            className={styles.pic}
            src="/images/profile_pic.jpg"
            alt="picture of Tim Liew"
            width={300}
            height={300}
            quality={100}
            loading="eager"
          />
          <div className={styles.description}>
            <h2>Full-Stack Problem Solver | Growth Mindset Leader</h2>
            <p>
              Passionate about building efficient systems, fostering
              environments where every team member can be the greatest version
              of themselves.
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <a href="#work" className={styles.cta}>
            See my work
            <ArrowDownRight size="1.25rem" stroke="white" />
          </a>
          <Contact />
        </div>
      </section>
    </div>
  )
}
