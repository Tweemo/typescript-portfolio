import {
  Image,
  Heading,
  Text,
  Center,
  VStack,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

const Intro = () => {
  
  return (
    <VStack borderRadius={['10%']} w={['90vw']}>
      <Center>
        <Image className={styles.pic} src='images/pic.jpg' alt='me' />
      </Center>
          <Heading color='scheme.text' fontSize={['2xl','3xl','4xl']}>
            This is me. 
          </Heading>
        <Text color='scheme.text' fontSize={['xl','2xl','3xl']} className={styles.header}>
          I&apos;m a <del>Pharmacist</del> Web Developer.
        </Text>
    </VStack>
    )
  }

  export default Intro