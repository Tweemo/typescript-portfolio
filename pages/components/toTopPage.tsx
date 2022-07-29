import {
  Link,
  Box,
  Center,
} from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const TopPage = () => {
    
    return (
    <Box className={styles.nextPage} padding={['1vh']}>
      <Link color={'scheme.text'} href={'#'} h={'10vh'}>
        <Center paddingTop={['10px']}>
          <Image className={styles.topPage} src='/images/arrow-down.png' height={32} width={32} alt='up arrow'/>
        </Center>
      </Link>
    </Box>
)
}

  export default TopPage