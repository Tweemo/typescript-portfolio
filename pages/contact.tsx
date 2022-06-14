import {
  Image,
  Heading,
  Text,
  Center,
  Box,
  VStack,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Socials from './socials'
import Navbar from './navbar'

const Contact = () => {
  
return (
    <>
      <Navbar />
      <Center>
        <VStack h='65vh'>
          <Heading>
            Get In Touch
          </Heading>
          <Text>
            Flick me an email @ Timothywrliew@gmail.com
          </Text>
        </VStack>
      </Center>
      <Socials />
    </>
  )
}

  export default Contact