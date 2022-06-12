import {
  Image,
  Box,
  SimpleGrid,
  Heading,
  Text,
  Center,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'


const Navbar = () => {
  
  return (
  <Box className={styles.cover}>
    <SimpleGrid columns={3} className={styles.nav}>
      <Center>
        <Image className={styles.logo} src='images/TL_Black_01.png' alt='logo'/>
      </Center>   
      <Center>
        <Text fontSize='xl'>Projects</Text>
      </Center>   
      <Center>
        <Text fontSize='xl'>Contact</Text>
      </Center>   
    </SimpleGrid>
  </Box>
    )
  }

  export default Navbar