import {
  Box,
} from '@chakra-ui/react'

const ProjectDate = (project: { dateAdded: string }) => {
  
  return (
    <Box roundedBottomLeft={['10px']} roundedBottomRight={['10px']} p={'10px'} textAlign={'center'} bg={'lightgrey'} w='full' as='i'>
       {project.dateAdded}
    </Box>
    )
  }

  export default ProjectDate