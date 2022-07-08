import {
  Center,
  Container, 
  Text,
  Link,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineCopyrightCircle } from 'react-icons/ai'
import NextLink from 'next/link'

const Socials = () => {
  
  return (
    <>
      <Container className={styles.socials} bg='lightblue'>
        <NextLink href='https://www.linkedin.com/in/tim-liew-a9572b20b/' passHref>
          <Link>
            <AiFillLinkedin size='2.5rem' className={styles.icon}/>
          </Link>
        </NextLink>
        <NextLink href='https://github.com/Tweemo' passHref>
          <Link>
            <AiOutlineGithub size='2.5rem' className={styles.icon}/>
          </Link>
        </NextLink>
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