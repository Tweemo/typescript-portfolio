import {
  SimpleGrid,
} from '@chakra-ui/react'
import getViewport from '../funcs/viewport'
import styles from '../styles/Home.module.css'
import {NavProject, NavLogo, NavContact, NavMenu} from './components/nav/'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [currentViewport, setCurrentViewport] = useState('')

  useEffect(() => {
    const viewport = getViewport()
    if (viewport >= 768) {
      setCurrentViewport('desktop')
    } else {  
      setCurrentViewport('mobile')
    }
  }, [])
  
  return (
      <SimpleGrid className={styles.nav} bg={'pink'} columns={{base: 2, md: 3}} p='1vh'>
        {currentViewport === 'desktop' ? 
          <>
            <NavLogo />
            <NavProject />
            <NavContact /> 
          </>
        : 
        <>
          <NavLogo />
          <NavMenu />
        </>
        }
      </SimpleGrid>
    )
  }

  export default Navbar