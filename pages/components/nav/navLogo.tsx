import {
  Center,
  Link,
  Image,
} from '@chakra-ui/react'
import styles from '../../../styles/Home.module.css'

const NavLogo = () => {
  
  return (
    <Center>
      <Link href='#'>
        <Image className={styles.logo} src='/images/TL_Black_01.png' alt='logo'/>
      </Link>
    </Center> 
    )
  }

  export default NavLogo