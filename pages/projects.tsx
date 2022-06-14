import {
  Heading,
  Box,
  Center,
  Text,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import Socials from './socials'
import OneProject from './oneProject'

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
        <Box h='68vh' className={styles.projectContainer}>
          <OneProject/>
        </Box>
{/* 
      <Center>
        <Heading>
          Completed Projects:
        </Heading>
      </Center>
      <Center>
        <Text>
          There is always something to improve on a project. 
        </Text>
      </Center> */}
      <Socials />
    </>
    )
  }

  export default Projects