import {
  Image,
  Heading,
  Text,
  HStack,
  VStack,
  Link,
  LinkBox,
} from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

const OneProject = () => {
  
  return (
    <>
      <LinkBox  as='article' margin='20px'>
        <VStack>
          <Link href='/'>
            <Heading fontSize='xl'>
              Pātaka
            </Heading>
          </Link>
          <HStack>
            <Image className={styles.projectIcon} boxSize='100px' src='https://tmctohealth.com/wp-content/uploads/2017/05/vegetables-vegetable-basket-harvest-garden-square.jpg' alt='Vege Basket'/>
            <Text>
              <b>Purpose:</b> Final group project
              <br/>
              <b>Time to complete:</b> 1 week
              <br/>
              <b>Tweaks required:</b> Mobile friendly, Listing status, Region filters, and comment manipulation.
              <br/>
              <b>Tech Stack:</b> React, Sqlite3, knex, express. 
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

      <LinkBox as='article' margin='20px'>
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
              <b>Tweaks required:</b> Removing unecessary dispatches, refactoring large functions.
              <br/>
              <b>New Tech:</b> ChakraUI
              <br/>
              <Link href='https://github.com/Tweemo/battleships' isExternal>
                <b>Click for Repo</b>
              </Link>
            </Text>
          </HStack>
          <Text as='i'>
              Date added: May 17 2022
          </Text>
        </VStack>
        <hr />
      </LinkBox>

      <LinkBox  as='article' margin='20px'>
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

    </>
    )
  }

  export default OneProject