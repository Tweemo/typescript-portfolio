import styles from './navbar.module.scss'
import { Link } from '@chakra-ui/react'
import Logo from '/public/images/TL_Black_01.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <Link href="#">
      <Image
        src={Logo}
        alt="logo"
        className={styles.navlogo}
        width={18}
        height={18}
      />
    </Link>
  )
}
