import {
  Collapse,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

const ProjectText = (project: {description: string}) => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  
  return (
    <Collapse startingHeight={'10vh'} in={show}>
      <Text p={'10px'} fontSize={['sm']} onClick={handleToggle}>
        {project.description}
        <b>...Read {show ? 'less' : 'more'}</b>
      </Text>
    </Collapse>
    )
  }

  export default ProjectText