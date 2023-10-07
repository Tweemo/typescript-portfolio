import { Metadata } from 'next'
import Navbar from './components/navbar/navbar'
import Projects from './components/project/projects'
import Contact from './components/contact/contact'
import Homepage from './components/homepage/homepage'

export const metadata: Metadata = {
  title: 'Tim Liew',
}

export default function Page() {
  return (
    <>
      <link rel="icon" href="images/favicon.ico" />
      <Navbar />
      <Homepage />
      <Projects />
      <Contact />
    </>
  )
}
