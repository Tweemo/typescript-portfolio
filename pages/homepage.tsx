import {
  Image,
  Heading,
  Text,
  Center,
  Box,
  Container,
  Flex,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import About from './about'
import Intro from './intro'
import NextPage from './toNextPage'

const Homepage = () => {
  
  return (
    <Container bg={'lightblue'}>
    <Center>
      <Flex direction={{base: 'column', md: 'row'}}>
        <Intro />
        <About />
      </Flex>
    </Center>
      {/* <NextPage /> */}
    </Container>
    )
  }

  export default Homepage