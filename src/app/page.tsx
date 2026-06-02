import { Metadata } from 'next'
import Projects from './components/projects/projects'
import BasicInfo from './components/basicInfo/basicInfo'
import About from './components/about/about'
import TechStack from './components/techStack/techStack'
import ContactCta from './components/contactCta/contactCta'
import '../../styles/globals.css'

export const metadata: Metadata = {
  title: 'Tim Liew',
}

export default function Page() {
  return (
    <>
      <BasicInfo />
      <About />
      <Projects />
      <TechStack />
      <ContactCta />
    </>
  )
}
