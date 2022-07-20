import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Socials from './components/socials'
import Projects from './projects'
import Contact from './contact'
import Homepage from './homepage'
import { Box } from '@chakra-ui/react'


 
const Home: NextPage = () => (
  <Box bg={'white'}>
    <Head>
      <title>Tim Liew</title>
      <link rel="icon" href="images/favicon.ico" />
    </Head>
    <Navbar />
    <Homepage />
    <Projects />
    <Contact />
    <Socials />
  </Box>
)

export default Home
