import {
  Image,
  Box,
  SimpleGrid,
  Text,
  Center,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Navbar = () => {
  
  return (
  <Box className={styles.cover}>
    <SimpleGrid columns={3} className={styles.nav}>
      <Center>
        <Image className={styles.logo} src='images/TL_Black_01.png' alt='logo'/>
      </Center>   
      <Link href='/projects'>
        <Center>
          <Text fontSize='xl'>Projects</Text>
        </Center>   
      </Link>
      <Link href='/contact'>
        <Center>
          <Text fontSize='xl'>Contact</Text>
        </Center>   
      </Link>
    </SimpleGrid>
  </Box>
    )
  }

  export default Navbar