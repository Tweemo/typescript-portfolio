import {
  Link,
  Heading,
  Text,
  Center,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import Socials from './socials'
import Navbar from './navbar'

const Contact = () => {
  
return (
    <>
      <Navbar />
      <Box h={['70vh','64vh']}>
        <Text color='gray' fontSize={['2xl', '4xl']} marginLeft={['20px','180px']} marginTop={['20px','100px']}>
          Get In Touch
        </Text>
        <Center>
          <Heading margin={['60px', '100px']}>
            Feel free to flick through an email or DM on LinkedIn. I&apos;ll gladly have a yarn.
          </Heading>
        </Center>
      <Center>
        <SimpleGrid columns={2} spacing='6vw' margin='20px'>
          <Text fontSize='2xl'>
          Email: <a href = "mailto: timothywrliew@gmail.com">Timothywrliew@gmail.com</a>
          </Text>
          <Text fontSize='2xl'>
            LinkedIn: <Link href='https://www.linkedin.com/in/tim-liew-a9572b20b/' isExternal> Tim Liew</Link>
          </Text>
        </SimpleGrid>
      </Center>
      </Box>
      <Socials />
    </>
  )
}

  export default Contact