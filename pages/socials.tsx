import {
  Center,
  Container, 
  Text,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineCopyrightCircle } from 'react-icons/ai'


const Socials = () => {
  
  return (
    <>
    <Container className={styles.socials} bg='tomato' p={4}>
      <AiFillLinkedin size='2rem' className={styles.icon}/>
      <AiOutlineGithub size='2rem' className={styles.icon}/>
    </Container>
      <Center>
        <AiOutlineCopyrightCircle/>
        <Text fontSize='xs'>
          Tim Liew 2022
        </Text>
      </Center>
    </>
    )
  }

  export default Socials