import {
  Heading,
  Box,
  Center,
} from '@chakra-ui/react'
import Navbar from './navbar'
import Socials from './socials'
import OneProject from './oneProject'
import styles from '../styles/Home.module.css'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import NextPage from './toNextPage'

const Projects = () => {

  let page:Object = {title: "projects"}
  
  return (
    <>
    <Box id='projects' paddingTop={'5vh'} >
      {/* <Navbar /> */}
        <Center h={'10vh'} w={'110vw'}>
          <Heading color='scheme.text' >
            Projects
          </Heading>
        </Center>
        {/* Each individual project would slot here
        eventually probs get a Mongodb here to map through all of them, for now hard code project.  */}
        <Box className={styles.box} h={['90vh']} w={['110vw']}>
          <OneProject/>
        </Box>
      {/* <Socials /> */}
    </Box>
    <Center w={['110vw']}>
      <NextPage title={''} {...page}/>
    </Center>
        </>
    )
  }

  export default Projects