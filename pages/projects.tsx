import {
  Heading,
  Box,
  Center,
} from '@chakra-ui/react'
import Navbar from './navbar'
import Socials from './socials'
import OneProject from './oneProject'
import styles from '../styles/Home.module.css'

const Projects = () => {
  
  return (
    <>
      <Navbar />
        <Center>
          <Heading>
            Projects In Progress:
          </Heading>
        </Center>
        {/* Each individual project would slot here
        eventually probs get a postgres db here to map through all of them, for now hard code project.  */}
        <Box className={styles.box} h={['72vh','71vh','70vh']}>
          <OneProject/>
        </Box>
      <Socials />
    </>
    )
  }

  export default Projects