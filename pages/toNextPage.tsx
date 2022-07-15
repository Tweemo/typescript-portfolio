import {
  Text,
  VStack,
  Link,
  Box,
  Center,
} from '@chakra-ui/react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import styles from '../styles/Home.module.css'

const NextPage = () => {
  
return (
  <Center>
    <Box className={styles.nextPage}>
      <Link color={'scheme.text'} href={'#projects'} h={'10vh'}>
        <VStack>
          <Text fontSize={['2xl']}>Projects</Text>
          <AiOutlineArrowDown size={'2rem'}/>
        </VStack>
      </Link>
    </Box>
  </Center>
  )
}

  export default NextPage