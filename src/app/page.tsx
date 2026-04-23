import { Metadata } from 'next'
import Projects from './components/projects/projects'
import BasicInfo from './components/basicInfo/basicInfo'
import '../../styles/globals.css'

export const metadata: Metadata = {
  title: 'Tim Liew',
}

export default function Page() {
  return (
    <>
      <BasicInfo />
      <Projects />
    </>
  )
}
