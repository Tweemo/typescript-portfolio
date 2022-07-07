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
      <Box h={['70vh','62.5vh','64vh']}>
        <Text color='gray' fontSize={['2xl','3xl','4xl']} marginLeft={['20px','180px']} marginTop={['20px','100px']}>
          Get In Touch
        </Text>
        <Center>
          <Heading margin={['60px', '100px','100px']}>
            Feel free to flick through an email or DM on LinkedIn. I&apos;ll gladly have a yarn.
          </Heading>
        </Center>
      <Center>
        <SimpleGrid columns={2} spacing={['6vw','10px','6vw']} margin={['20px','15px','20px']}>
          <Text fontSize={['lg','2xl','2xl']}>
          Email: <a href = "mailto: timothywrliew@gmail.com">Timothywrliew@gmail.com</a>
          </Text>
          <Center>
            <Text fontSize={['lg','2xl','2xl']}>
              LinkedIn: <Link href='https://www.linkedin.com/in/tim-liew-a9572b20b/' isExternal> Tim Liew</Link>
            </Text>
          </Center>
        </SimpleGrid>
      </Center>
      </Box>
      <Socials />
    </>
  )
}

  export default Contact