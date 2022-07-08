import {
  Link,
  Text,
  Center,
  HStack,
  Box,
} from '@chakra-ui/react'
import { AiFillLinkedin } from 'react-icons/ai'

const Linkedin = () => {
  
return (
    <Box fontSize={['2xl','2xl','3xl','3xl','4xl']} w={'100vw'} margin={['20px']}>
      <Center>
        <HStack>
          <AiFillLinkedin />
          <Link href='https://www.linkedin.com/in/tim-liew-a9572b20b/' isExternal>Tim Liew</Link>
        </HStack>
      </Center>
    </Box>
  )
}

  export default Linkedin