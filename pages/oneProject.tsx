import {
  Image,
  Heading,
  Text,
  HStack,
  Box,
  VStack,
  Center,
  Link,
  LinkBox,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import Socials from './socials'

const OneProject = () => {
  
  return (
    <>
      <Link href='https://tims-battleships.herokuapp.com/' isExternal>
        <LinkBox as='article' margin='20px'>
          <HStack>
            <VStack>
              <Heading fontSize='xl'>
                Battleships
              </Heading>
              <Image className={styles.projectIcon} boxSize='100px' src='https://www.mobygames.com/images/covers/l/396111-battleship-playstation-4-front-cover.png' alt='battleships'/>
            </VStack>
              <Text>
                Battleships game that I built as a tech challenge for Raygun.
              </Text>
          </HStack>
              <Text as='i'>
                Date added: May 17 2022
                </Text>
        <hr />
        </LinkBox>
      </Link>
    </>
    )
  }

  export default OneProject