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
    <SimpleGrid columns={3} h='5vh' padding={'1vh'}>
      <Center>
        <Link href='/'>
          <Image className={styles.logo} src='images/TL_Black_01.png' alt='logo'/>
        </Link>
      </Center>   
      <Center>
        <Link href='#projects'>
        <Text color='scheme.text' fontSize={['2xl','2xl','2xl', '3xl']}>
          Projects
          </Text>
        </Link>
      </Center>
      <Center>
        <Link href='#contact'>
          <Text color='scheme.text' fontSize={['2xl','2xl','2xl', '3xl']}>Contact</Text>
        </Link> 
      </Center>   
    </SimpleGrid>
  </Box>
    )
  }

  export default Navbar