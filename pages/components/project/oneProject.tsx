import { ProjectButtons, ProjectDate, ProjectImage, ProjectText } from './'

const OneProject = (project: {
  title: string
  description: string
  github: string
  app: string
  images: string
  state: string
}) => {
  return (
    <>
      <ProjectImage {...project} />
      <h2>{project.title}</h2>
      <ProjectText {...project} />
      <ProjectButtons {...project} />
      <ProjectDate {...project} />
    </>
  )
}

export default OneProject
