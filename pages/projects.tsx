import {
  Heading,
  Box,
  Center,
} from '@chakra-ui/react'
import { OneProject } from './components/project/'
import styles from '../styles/Home.module.css'
import NextPage from './components/toNextPage'

const Projects = () => {

  // Need to get this array/info into MongoDB instead of being hardcoded.
  let projects = [
    {
      id:1,
      title: 'Pātaka',
      description: 'Pātaka was my final group project at Dev Academy. The aim of Pātaka was to create a community through sharing and redistribution of food.',
      github: 'https://github.com/Tweemo/Paataka',
      app: 'https://paataka.herokuapp.com/',
      images:'/images/paataka/home1.png',
      state: 'Ongoing'
    },
    {
      id:2,
      title: 'Battleships',
      description: 'I built this battleships game as part of my tech challenge for Raygun. Initially, I had an excessive amount of thunks being dispatched but with the feedback given to me, I reduced the code and made it more efficient.',
      github: 'https://github.com/Tweemo/battleships',
      app: 'https://tims-battleships.herokuapp.com/',
      images:'/images/battleships.png',
      state: 'Ongoing'
    },
    {
      id:3,
      title: 'This Portfolio',
      description: 'I created this portfolio as a means to display my projects as well as dipping into some new technology that I have not used before.',
      github: 'https://github.com/Tweemo/typescript-portfolio',
      app: '#',
      images:'/images/TLFrame_Black_01.png',
      state: 'Ongoing'
    },
  ]

  let page:Object = {title: "projects"}
  
  return (
    <>
      <Box id='projects' paddingTop={'5vh'} w={'100vw'}>
        <Center h={'10vh'}>
          <Heading color='scheme.text' >
            Projects
          </Heading>
        </Center>
        <Box bg='white' className={styles.box} h={['88vh']}>
          {projects.map(project => <OneProject key={project.id} {...project}/>)}
        </Box>
      </Box>
      <Center w={'100vw'}>
        <NextPage title={''} {...page}/>
      </Center>
    </>
    )
  }

  export default Projects