import {
  Image,
  Link,
  Box,
  Center,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

const NextPage = (prop: { title: string }) => {

  let nextPage:string = '#projects'

  if (prop.title === "home") {
    nextPage = '#projects'
  } else if (prop.title === 'projects') {
    nextPage = '#contact'
  }
    
    return (
      <Box className={styles.nextPage} w='100vw' paddingTop={['10px']}>
      <Link color={'scheme.text'} href={nextPage} h={'10vh'}>
        <Center paddingTop={['10px']}>
        <Image src='images/arrow-down.png' alt='down arrow'/>
        </Center>
      </Link>
    </Box>
  )
}

  export default NextPage