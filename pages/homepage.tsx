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

  let page:Object = {title: "home"}

  return (
    <Container bg={'lightblue'} w='110vw' h={['104vh']}>
    <Center>
      <Flex direction={{base: 'column', md: 'row'}}>
        <Intro />
        <About />
      </Flex>
    </Center>
    <NextPage title={''} {...page}/>
    </Container>
    )
  }

  export default Homepage