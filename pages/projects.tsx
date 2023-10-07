import OneProject from './components/project/project'

export default function Projects() {
  // Need to get this array/info into MongoDB instead of being hardcoded.
  const projects = [
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

  return (
    <>
      <h3>Projects</h3>
      {projects.map((project) => (
        <OneProject key={project.id} {...project} />
      ))}
    </>
  )
}
