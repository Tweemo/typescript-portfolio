import Link from 'next/link'

const ProjectButtons = (project: { app: string; github: string }) => {
  return (
    <>
      <Link href={project.github} target="_blank">
        <button>Repo</button>
      </Link>
      {project.app === '#' ? (
        <Link href={project.app}>
          <button>App</button>
        </Link>
      ) : (
        <Link href={project.app} target="_blank">
          <button>App</button>
        </Link>
      )}
    </>
  )
}

export default ProjectButtons
