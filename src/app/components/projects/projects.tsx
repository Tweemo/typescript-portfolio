import styles from './projects.module.scss'
import ProjectCard from './project-card'

export default function Projects() {
  const projects = [
    {
      name: 'Totara',
      description:
        'Developed and maintained core platform functionalities, building robust server-side logic while simultaneously engineering intuitive, user-friendly interfaces for educational administrators.',
      tech: [
        'Vuejs',
        'PHP',
        'GraphQL',
        'MariaDB',
        'MsSQL',
        'Postgresql',
        'MySQL',
      ],
      link: 'https://www.totara.com/',
      image: '/images/totara.webp',
      image_alt: 'Totara logo',
    },
    {
      name: 'Ministry of Education New Zealand',
      description:
        'Responsible for enhancing the overall site structure and usability. Developed the main site navigation and significantly improved the search features, resulting in a clearer and more user-friendly website experience.',
      tech: ['Next.js', 'React', 'TypeScript', 'PHP', 'Algolia'],
      link: 'https://www.education.govt.nz/',
      image: '/images/education.svg',
      image_alt: 'Ministry of Education New Zealand logo',
    },
    {
      name: 'Mondplan',
      description:
        'Developed a core set of reusable UI components for the Mondplan project, ensuring a consistent user experience across the entire platform.',
      tech: ['React', 'TypeScript'],
      link: 'https://mondplan.nl/',
      image: '/images/mondplan.png',
      image_alt: 'Mondplan logo',
    },
  ]

  const wipProjects = [
    {
      name: 'Triple Triad React',
      description:
        'Recreating the classic Final Fantasy VIII card game, Triple Triad, using React and TypeScript. This project is a fun way to explore game development and improve my front-end skills.',
      tech: ['Vite', 'React', 'TypeScript'],
      link: 'https://github.com/Tweemo/triple-triad-react',
    },
    {
      name: 'Go Electric',
      description:
        'A simple calculator tool to figure out which power company is cheaper to use based on your usage.',
      tech: ['Golang', 'Docker', 'React', 'TypeScript'],
      link: 'https://go-electric-web.onrender.com/',
    },
  ]

  return (
    <section id="work" className={styles.container}>
      <div className={styles.heading}>
        <h1>Experience</h1>
      </div>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>

      <div className={styles.heading}>
        <h1>Personal Projects</h1>
        <p>Things I&apos;m tinkering with on the side</p>
      </div>
      <div className={styles.projectList}>
        {wipProjects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  )
}
