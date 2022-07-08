import {
  Image,
  Heading,
  Text,
  Center,
  Box,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

const Intro = () => {
  
  return (
    <Box h={['41vh','41.2vh','40vh', '35vh','34vh']}>
      <Center>
        <Image className={styles.pic} src='images/pic.jpg' alt='me' />
      </Center>
      <Center>
        <Center>
          <Heading fontSize={['2xl','3xl','4xl']} p='20px'>
            This is me, Tim. 
          </Heading>
        </Center>
        <Text align='center' fontSize={['xl','2xl','3xl']} className={styles.header}>
          I&apos;m A <del>Pharmacist</del> Web Developer.
        </Text>
      </Center>
    </Box>
    )
  }

  export default Intro