import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { 
  Text,
  UnorderedList,
  ListItem,
  Box,
 } from '@chakra-ui/react'
import Navbar from './navbar'
import Intro from './intro'
import Socials from './socials'
import About from './about'


 
const Home: NextPage = () => (
  <>
    <Head>
      <title>Tim Liew</title>
      <link rel="icon" href="images/favicon.ico" />
    </Head>
    <Navbar />
    <Intro />
    <About/>
    <Socials/>
  </>
)

export default Home
