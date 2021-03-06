import {
  Image,
  Heading,
  Text,
  HStack,
  VStack,
  Link,
  LinkBox,
  Center,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

const OneProject = () => {
  
  return (
  <>
    <Center>
      <LinkBox w={['85vw','100vw','100vw','60vw', '60vw']} as='article' margin='20px'>
        <VStack>
          <Link href='https://paataka.herokuapp.com/'>
            <Heading fontSize='xl'>
              Pātaka
            </Heading>
          </Link>
          <HStack>
            <Image className={styles.projectIcon} boxSize='100px' src='https://tmctohealth.com/wp-content/uploads/2017/05/vegetables-vegetable-basket-harvest-garden-square.jpg' alt='Vege Basket'/>
            <Text>
              <b>Purpose:</b> Platform to redistribute excess food.
              <br/>
              <b>Time to complete:</b> 1 week
              <br/>
              <b>Tweaks required:</b> Mobile friendly, Listing status, Region filters, and comment manipulation.
              <br/>
              <b>Tech Stack:</b> React, Sqlite3, Knex, Express. 
              <br/>
              <Link href='https://github.com/Tweemo/Paataka' isExternal>
                <b>Click for Repo</b>
              </Link>
            </Text>
          </HStack>
          <Text as='i'>
            Date added: May 11 2022
          </Text>
        </VStack>
        <hr />
      </LinkBox>
    </Center>

    <Center>
      <LinkBox w={['85vw','100vw','100vw','60vw', '60vw']}  as='article' margin='20px'>
        <VStack>
          <Link href='https://tims-battleships.herokuapp.com/' isExternal>
            <Heading fontSize='xl'>
              Battleships
            </Heading>
          </Link>
          <HStack>
            <Image className={styles.projectIcon} boxSize='100px' src='https://www.mobygames.com/images/covers/l/396111-battleship-playstation-4-front-cover.png' alt='battleships'/>
            <Text>
              <b>Purpose:</b> Tech challenge. 
              <br/>
              <b>Time to complete:</b> 4 days
              <br/>
              <b>Tweaks required:</b> Refactoring large functions into more efficient smaller functions. Make it look prettier.
              <br/>
              <b>New Tech:</b> ChakraUI
              <br/>
              <Link href='https://github.com/Tweemo/battleships' isExternal>
                <b>Click for Repo</b>
              </Link>
            </Text>
          </HStack>
          <Text as='i'>
              Date added: May 17 2022, Date updated: June 22 2022
          </Text>
        </VStack>
        <hr />
      </LinkBox>
    </Center>

    <Center>
      <LinkBox  w={['85vw','100vw','100vw','60vw', '60vw']}  as='article' margin='20px'>
        <VStack>
          <Link href='/'>
            <Heading fontSize='xl'>
              This Portfolio
            </Heading>
          </Link>
          <HStack>
            <Image className={styles.projectIcon} boxSize='100px' src='images/TLFrame_Black_01.png' alt='This Portfolio'/>
            <Text>
              <b>Purpose:</b> Display projects and bio. 
              <br/>
              <b>Time to complete:</b> 4 days
              <br/>
              <b>Tweaks required:</b> Add database that I haven&apos;t used before to remove hardcoded projects.
              <br/>
              <b>New Tech:</b> Typescript, NextJS.
              <br/>
              <Link href='https://github.com/Tweemo/typescript-portfolio' isExternal>
                <b>Click for Repo</b>
              </Link>
            </Text>
          </HStack>
          <Text as='i'>
            Date added: June 14 2022
          </Text>
        </VStack>
        <hr />
      </LinkBox>
    </Center>
  </>
    )
  }

  export default OneProject