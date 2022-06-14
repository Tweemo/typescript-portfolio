import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import {
  Heading,
  Text,
  Center,
} from '@chakra-ui/react'
import Navbar from './navbar'
import Intro from './intro'
import Socials from './socials'
import styles from '../styles/Home.module.css'


 
const Home: NextPage = () => (
  <>
    <Head>
      <title>Tim Liew</title>
      <link rel="icon" href="images/favicon.ico" />
    </Head>
    <Navbar />
    <Intro />
      <Text className={styles.info} fontSize='xl' align='center'>
        About me insert here. 
        I like to code things that interest me. I&apos;m interested in almost everything.
        <br></br>
        I like to code things that interest me. I&apos;m interested in almost everything.
      </Text>
    <Socials/>
  </>
)

export default Home
