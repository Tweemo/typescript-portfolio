import {
  Heading,
  Text,
  Center,
  Box,
  Flex,
} from '@chakra-ui/react'
import { Linkedin, Email } from './components/contact/'
import TopPage from './components/toTopPage'

const Contact = () => {
  
return (
  <>
    <Box id='contact' h={['87vh']} w='110vw'>
      <Text color='scheme.title' fontSize={{base: '3xl'}} w='110vw' align='center' left={{base: '10vh'}} marginTop={{base: '5vh'}} paddingTop='5vh'>
        Get In Touch
      </Text>
      <Center>
        <Heading color='scheme.text' margin={['65px','80px','100px']}>
          Feel free to flick through an email or DM on LinkedIn. I&apos;ll gladly have a yarn.
        </Heading>
      </Center>
      <Flex direction={{base: 'column', md: 'row'}}>
        <Email />
        <Linkedin />
      </Flex>
    </Box>
    <Center w={'110vw'}>
      <TopPage /> 
    </Center>
  </>
  )
}

  export default Contact