import {
  Heading,
  VStack,
  LinkBox,
  Center,
} from '@chakra-ui/react'
import {ProjectButtons ,ProjectDate, ProjectImage, ProjectText} from './'

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