import {
  Image,
  Box,
  SimpleGrid,
  Text,
  Center,
  Link,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'


const Navbar = () => {
  
  return (
  <Box className={styles.cover}>
    <SimpleGrid columns={3} className={styles.nav}>
      <Center>
        <Link className={styles.links} href='/'>
          <Image className={styles.logo} src='images/TL_Black_01.png' alt='logo'/>
        </Link>
      </Center>   
      <Center>
        <Link className={styles.links} href='/projects'>
        <Text fontSize='xl'>
          Projects
          </Text>
        </Link>
      </Center>
      <Center>
        <Link href='/contact'>
          <Text fontSize='xl'>Contact</Text>
        </Link>
      </Center>   
    </SimpleGrid>
  </Box>
    )
  }

  export default Navbar