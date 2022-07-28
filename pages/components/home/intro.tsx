import {
  Image,
  Heading,
  Text,
  Center,
  VStack,
} from '@chakra-ui/react'
import styles from '../../../styles/Home.module.css'

const Intro = () => {
  
  return (
    <VStack borderRadius={['10%']} w={['90vw']} h={['35vh']}>
      <Center>
        <Image className={styles.pic} src='images/pic.jpg' alt='me' />
      </Center>
          <Heading color='scheme.text' fontSize={{base: 'lg', md:'2xl'}}>
            This is me. 
          </Heading>
        <Text color='scheme.text' fontSize={{base: 'md', md:'xl'}} className={styles.header}>
          I&apos;m a <del>Pharmacist</del> Web Developer.
        </Text>
    </VStack>
    )
  }

  export default Intro