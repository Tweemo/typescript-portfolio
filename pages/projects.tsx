import {
  Image,
  Heading,
  Text,
  HStack,
  Box,
  VStack,
  Center,
  Link,
  LinkBox,
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
        <Box className={styles.projectContainer}>
          <OneProject/>
        </Box>
      <Socials />
    </>
    )
  }

  export default Projects