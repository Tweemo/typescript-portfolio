import {
  Center,
  Container,
  Flex,
} from '@chakra-ui/react'
import About from './components/home/about'
import Intro from './components/home/intro'
import NextPage from './components/toNextPage'

const Homepage = () => {

  let page:Object = {title: "home"}

  return (
    <Container bg={'lightblue'} w='100vw' h={['104vh']}>
      <Center>
        <Flex direction={{base: 'column', md: 'row'}}>
          <Intro />
          <About />
        </Flex>
      </Center>
      <Center>
        <NextPage title={''} {...page}/>
      </Center>
    </Container>
    )
  }

  export default Homepage