import {
  Image,
  Heading,
  Text,
  HStack,
  VStack,
  Link,
  LinkBox,
  Center,
  Button,
  Box,
  Collapse,
} from '@chakra-ui/react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const OneProject = () => {

  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  
  return (
  <>
    <Center>
      <LinkBox border='1px' borderRadius={['10px']} as='article' margin='20px' h={['auto']}>
        <VStack>
          <Image borderRadius={['10px']} src='images/paataka/home1.png' alt='Paataka'/>
          <Heading fontSize='2xl'>
            Pātaka
          </Heading>
          <Collapse startingHeight={'15vh'} in={show}>
            <Text p={'10px'} fontSize={['sm']} onClick={handleToggle}>
              Pātaka was my final group project at Dev Academy. 
              The aim of Pātaka was to create a community through sharing and redistribution of food.
              
              ...Read {show ? 'less' : 'more'}
            </Text>
          </Collapse>
          <HStack>
            <Link href='https://github.com/Tweemo/Paataka' isExternal>
              <Button>Repo</Button>
            </Link>
            <Link href='https://paataka.herokuapp.com/' isExternal>
              <Button>App</Button>
            </Link>
          </HStack>
          <Box roundedBottomLeft={['10px']} roundedBottomRight={['10px']} p={'10px'} textAlign={'center'} bg={'lightgrey'} w='full' as='i'>
            Date added: May 11 2022
          </Box>
        </VStack>
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