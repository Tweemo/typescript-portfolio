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
    <Box className={styles.intro}>
      <Center>
        <Image className={styles.pic} src='images/pic.jpg' alt='me' />
      </Center>
      <Center>
        <Center>
          <Heading className={styles.header}>
            This is me, Tim. 
          </Heading>
        </Center>
        <Text align='center' fontSize='3xl' className={styles.header}>
          I&apos;m A Web Developer.
        </Text>
      </Center>
    </Box>
    )
  }

  export default Intro