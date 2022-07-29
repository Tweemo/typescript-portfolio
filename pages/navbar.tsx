import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import getViewport from '../funcs/viewport'
import styles from '../styles/Home.module.css'
import {NavProject, NavLogo, NavContact} from './components/nav/'
import Script from 'next/script'
import { useEffect } from 'react'

const Navbar = () => {

  useEffect(() => {
    const viewport = getViewport()
    if (viewport >= 768) {
      // state = desktop
    } else {  
      // state = mobile if less than 768
    }
  })
  // if vw >768 or 767 lel
  
  
  return (
    <Box bg={'white'} className={styles.nav}>
    <SimpleGrid columns={{base: 2, md: 3}} h='7vh' padding={'1vh'}>
      <NavLogo />
      <NavProject />
      <NavContact />
    </SimpleGrid>
  </Box>
    )
  }

  export default Navbar