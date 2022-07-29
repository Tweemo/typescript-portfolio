import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import NavProject from './components/nav/navProjects'
import NavLogo from './components/nav/navLogo'
import NavContact from './components/nav/navContact'

const Navbar = () => {
  
  return (
  <Box bg={'white'} className={styles.nav}>
    <SimpleGrid columns={3} h='7vh' padding={'1vh'}>
      <NavLogo />
      <NavProject />
      <NavContact />
    </SimpleGrid>
  </Box>
    )
  }

  export default Navbar