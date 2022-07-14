import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Intro from './intro'
import Socials from './socials'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import { Box, ButtonGroup } from '@chakra-ui/react'


 
const Home: NextPage = () => (
  <Box bg='scheme.bg'>
    <Head>
      <title>Tim Liew</title>
      <link rel="icon" href="images/favicon.ico" />
    </Head>
    <Navbar />
    <Intro />
    <Projects />
    <Contact />
    <Socials />
  </Box>
)

export default Home
