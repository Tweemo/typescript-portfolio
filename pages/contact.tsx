import {
  Heading,
  Text,
  Center,
  Box,
  Flex,
} from '@chakra-ui/react'
import Socials from './socials'
import Navbar from './navbar'
import Linkedin from './linkedin'
import Email from './email'

const Contact = () => {
  
return (
    <>
      <Navbar />
      <Box h={['79.5vh','75vh','70.5vh','66.5vh', '63vh', '61.2vh']}>
        <Text color='gray' fontSize={['2xl','3xl', '4xl','4xl','5xl']} marginLeft={['20px','20px','40px','180px','200px', '50vh']} marginTop={['20px','40px','76px', '105px']}>
          Get In Touch
        </Text>
        <Center>
          <Heading margin={['65px','80px','100px']}>
            Feel free to flick through an email or DM on LinkedIn. I&apos;ll gladly have a yarn.
          </Heading>
        </Center>
        <Flex direction={{base: 'column', md: 'row'}}>
          <Email />
          <Linkedin />
        </Flex>
      </Box>
      <Socials />
    </>
  )
}

  export default Contact