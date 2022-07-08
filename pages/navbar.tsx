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
  <Box>
    <SimpleGrid columns={3} h='10vh'>
      <Center>
        <Link href='/'>
          <Image className={styles.logo} src='images/TL_Black_01.png' alt='logo'/>
        </Link>
      </Center>   
      <Center>
        <Link href='/projects'>
        <Text fontSize={['2xl','2xl','2xl', '3xl']}>
          Projects
          </Text>
        </Link>
      </Center>
      <Center>
        <Link href='/contact'>
          <Text fontSize={['2xl','2xl','2xl', '3xl']}>Contact</Text>
        </Link>
      </Center>   
    </SimpleGrid>
  </Box>
    )
  }

  export default Navbar