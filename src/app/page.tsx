import { Metadata } from 'next'
import '/styles/globals.css'
import Card from './components/card/card'

export const metadata: Metadata = {
  title: 'Tim Liew',
}

export default function Page() {
  return <Card />
}
