import {
  Image,
  Heading,
  VStack,
  LinkBox,
  Center,
} from '@chakra-ui/react'
import ProjectButtons from './projectButtons'
import ProjectDate from './projectDate'
import ProjectText from './projectText'

const OneProject = (project: { title: string, description: string, github: string, app: string, images: string, dateAdded: string }) => {
  
  return (
    <Center>
      <LinkBox border='1px' borderRadius={['10px']} as='article' margin='20px' h={['auto']}>
        <VStack>
          <Image borderRadius={['10px']} src={project.images} alt={project.title}/>
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