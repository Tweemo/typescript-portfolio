import {
  Link,
  Box,
  Center,
} from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const NextPage = (prop: { title: string }) => {

  let nextPage:string = '#projects'

  if (prop.title === "home") {
    nextPage = '#projects'
  } else if (prop.title === 'projects') {
    nextPage = '#contact'
  }
    
    return (
    <Box className={styles.nextPage} padding={['1vh']}>
      <Link color={'scheme.text'} href={nextPage} h={'10vh'}>
        <Center paddingTop={['10px']}>
          <Image src='/images/arrow-down.png' height={32} width={32} alt='down arrow'/>
        </Center>
      </Link>
    </Box>
)
}

  export default NextPage