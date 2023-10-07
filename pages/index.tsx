import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Navbar from './components/navbar/navbar'
import Projects from './components/project/projects'
import Contact from './components/contact/contact'
import Homepage from './components/homepage/homepage'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Tim Liew</title>
      <link rel="icon" href="images/favicon.ico" />
    </Head>
    <Navbar />
    <Homepage />
    <Projects />
    <Contact />
  </>
)

export default Home
