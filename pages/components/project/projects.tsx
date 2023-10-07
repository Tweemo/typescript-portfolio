'use client'

import { useState } from 'react'
import Project, { ProjectProps } from './project'
import styles from './projects.module.scss'

export default function Projects() {
  const [project, setProject] = useState('Pātaka')
  // Need to get this array/info into MongoDB instead of being hardcoded.
  const projects: ProjectProps[] = [
    {
      id: 1,
      title: 'Pātaka',
      description:
        'Pātaka was my final group project at Dev Academy. The aim of Pātaka was to create a community through sharing and redistribution of food.',
      github: 'https://github.com/Tweemo/Paataka',
      app: 'https://paataka.herokuapp.com/',
      images: '/images/paataka/home1.png',
      state: 'Ongoing',
    },
    {
      id: 2,
      title: 'Battleships',
      description:
        'I built this battleships game as part of my tech challenge for Raygun. Initially, I had an excessive amount of thunks being dispatched but with the feedback given to me, I reduced the code and made it more efficient.',
      github: 'https://github.com/Tweemo/battleships',
      app: 'https://tims-battleships.herokuapp.com/',
      images: '/images/battleships.png',
      state: 'Ongoing',
    },
    {
      id: 3,
      title: 'This Portfolio',
      description:
        'I created this portfolio as a means to display my projects as well as dipping into some new technology that I have not used before.',
      github: 'https://github.com/Tweemo/typescript-portfolio',
      app: '#',
      images: '/images/TLFrame_Black_01.png',
      state: 'Ongoing',
    },
  ]
  const currentProject = projects.find((p) => p.title === project)
  const { id, title, description, github, app, images, state } = currentProject
    ? currentProject
    : projects[0]

  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.wrapper}>
        <div className={styles.titles}>
          {projects.map(({ title }) => (
            <button key={title} onClick={() => setProject(title)}>
              <h2>{title}</h2>
            </button>
          ))}
        </div>
        <div className={styles.projects}>
          <Project
            key={id}
            title={title}
            description={description}
            github={github}
            app={app}
            images={images}
            state={state}
          />
        </div>
      </div>
    </div>
  )
}
