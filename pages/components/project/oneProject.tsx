import {
  Heading,
  VStack,
  LinkBox,
  Center,
  Container,
} from '@chakra-ui/react'
import ProjectButtons from './projectButtons'
import ProjectDate from './projectDate'
import ProjectText from './projectText'
import Image from 'next/image'
import ProjectImage from './projectImage'

const OneProject = (project: { title: string, description: string, github: string, app: string, images: string, state: string }) => {
  
  return (
    <Center>
      <LinkBox border='1px' borderRadius={['10px']} as='article' margin='20px' w='90vw' h={['auto']}>
        <VStack>
          <ProjectImage {...project} />
          <Heading fontSize='2xl'>{project.title}</Heading>
          <ProjectText {...project} />
          <ProjectButtons {...project}/>
          <ProjectDate {...project}/>
        </VStack>
      </LinkBox>
    </Center> 
    )
  }

  export default OneProject