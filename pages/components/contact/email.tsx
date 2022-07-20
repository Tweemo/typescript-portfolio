import {
  HStack,
  Box,
  Center,
} from '@chakra-ui/react'
import { AiOutlineMail } from 'react-icons/ai'

const Email = () => {
  
return (
    <Box fontSize={['2xl','2xl','3xl','3xl','4xl']} w={'100vw'} margin={['20px']}>
      <Center>
        <HStack>
          <AiOutlineMail />
          <a href="mailto: timothywrliew@gmail.com">Timothywrliew@gmail.com</a>
        </HStack>
      </Center>
    </Box>
  )
}

  export default Email