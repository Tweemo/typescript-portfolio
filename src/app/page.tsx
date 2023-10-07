import { Metadata } from 'next'
import Navbar from './components/navbar/navbar'
import Projects from './components/project/projects'
import Contact from './components/contact/contact'
import Homepage from './components/homepage/homepage'
import '../../styles/globals.css'

export const metadata: Metadata = {
  title: 'Tim Liew',
}

export default function Page() {
  return (
    <div className="home">
      <link rel="icon" href="images/favicon.ico" />
      <Navbar />
      <Homepage />
      <Projects />
      <Contact />
    </div>
  )
}
