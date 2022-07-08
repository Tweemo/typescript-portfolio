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
          <Heading marginBottom={[null, null, null, '20px']}>
            Projects In Progress:
          </Heading>
        </Center>
        {/* Each individual project would slot here
        eventually probs get a postgres db here to map through all of them, for now hard code project.  */}
        <Box className={styles.box} h={['72vh','73vh','73.5vh','70.5vh', '68vh']}>
          <OneProject/>
        </Box>
      <Socials />
    </>
    )
  }

  export default Projects