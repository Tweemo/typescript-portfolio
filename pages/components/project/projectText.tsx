import {
  Collapse,
  Text,
} from '@chakra-ui/react'

const ProjectText = (project: {description: string}) => {
  
  return (
      <Text p={'10px'} fontSize={['sm']}>
        {project.description}
      </Text>
    )
  }

  export default ProjectText