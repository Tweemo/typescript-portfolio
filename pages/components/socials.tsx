import styles from '../../styles/Home.module.css'
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai'
import Link from 'next/link'

const Socials = () => {
  return (
    <>
      <Link href="https://www.linkedin.com/in/tim-liew-a9572b20b/" passHref>
        <AiFillLinkedin size="2.5rem" className={styles.icon} />
      </Link>
      <Link href="https://github.com/Tweemo" passHref>
        <AiOutlineGithub size="2.5rem" className={styles.icon} />
      </Link>
      <AiOutlineCopyrightCircle />
      <h3>Tim Liew 2022</h3>
    </>
  )
}

export default Socials
