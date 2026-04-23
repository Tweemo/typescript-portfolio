import Image from 'next/image'
import styles from './basicInfo.module.scss'
import Contact from '../contact/contact'
import clsx from 'clsx'

export default function BasicInfo({ className }: { className?: string }) {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.content}>
        <Image
          className={styles.pic}
          src="/images/profile_pic.jpg"
          alt="picture of Tim Liew"
          width={300}
          height={300}
          quality={100}
          loading="eager"
        />
      </div>
      <div className={styles.description}>
        <h2>Full-Stack Problem Solver | Growth Mindset Leader</h2>
        <span>
          Passionate about building scalable systems while fostering
          environments where every team member can learn and excel.
        </span>
      </div>
      <Contact />
    </div>
  )
}
