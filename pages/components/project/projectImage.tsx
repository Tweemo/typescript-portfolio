import {
  Box,
} from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

const ProjectImage = (project: { images: string , title: string}) => {
  
  return (
    <Box>
      <Image className={styles.image} src={project.images} alt={project.title} height={300} width={400} />
    </Box>
  )
}

  export default ProjectImage