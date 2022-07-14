import {
  Image,
  Heading,
  Text,
  Center,
  Box,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import About from './about'

const Intro = () => {
  
  return (
    <Box h={['41vh','41.2vh','40vh', '35vh','94vh']}>
      <Center>
        <Image className={styles.pic} src='images/pic.jpg' alt='me' />
      </Center>
      <Center>
        <Center>
          <Heading color='scheme.text' fontSize={['2xl','3xl','4xl']} p='20px'>
            This is me, Tim. 
          </Heading>
        </Center>
        <Text color='scheme.text' align='center' fontSize={['xl','2xl','3xl']} className={styles.header}>
          I&apos;m a <del>Pharmacist</del> Web Developer.
        </Text>
      </Center>
      <About />
    </Box>
    )
  }

  export default Intro