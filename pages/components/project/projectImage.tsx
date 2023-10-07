import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

const ProjectImage = (project: { images: string; title: string }) => {
  return (
    <Image
      className={styles.image}
      src={project.images}
      alt={project.title}
      height={300}
      width={400}
    />
  )
}

export default ProjectImage
