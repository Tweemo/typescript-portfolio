import {
  HStack,
  Link,
  Button,
} from '@chakra-ui/react'

const ProjectButtons = (project: {app: string, github: string}) => {
  
  return (
    <HStack>
      <Link href={project.github} isExternal>
        <Button>Repo</Button>
      </Link>
      {(project.app === '#')?
        <Link href={project.app}>
          <Button>App</Button>
        </Link>
        :
        <Link href={project.app} isExternal>
          <Button>App</Button>
        </Link>
      }
    </HStack>
    )
  }

  export default ProjectButtons