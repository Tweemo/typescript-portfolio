import Link from 'next/link'
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import styles from './contact.module.scss'
import { IconType } from 'react-icons'

export default function Contact() {
  interface socialsProp {
    href: string
    Icon: IconType
    text: string
  }

  const socials: socialsProp[] = [
    {
      href: 'mailto: timothywrliew@gmail.com',
      Icon: AiOutlineMail,
      text: 'Timothywrliew@gmail.com',
    },
    {
      href: 'https://www.linkedin.com/in/tim-liew/',
      Icon: AiFillLinkedin,
      text: 'Tim Liew',
    },
    {
      href: 'https://github.com/Tweemo',
      Icon: AiOutlineGithub,
      text: 'Tweemo',
    },
  ]

  return (
    <div className={styles.container}>
      {socials.map(({ text, href, Icon }) => (
        <Link href={href} key={text} className={styles.social} target="_blank">
          <Icon size="2.5rem" />
          {text}
        </Link>
      ))}
    </div>
  )
}
