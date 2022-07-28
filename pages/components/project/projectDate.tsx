import {
  Box,
} from '@chakra-ui/react'

const ProjectState = (project: { state: string }) => {
  
  return (
    <Box roundedBottomLeft={['10px']} roundedBottomRight={['10px']} p={'10px'} textAlign={'center'} bg={'lightgrey'} w='full' as='i'>
       State: {project.state}
    </Box>
    )
  }

  export default ProjectState