import React from 'react'
import { Text, VStack } from '@chakra-ui/react'
 
const About = () => (
  <VStack w={['90vw']} bg={'white'} borderRadius='20px'>
    <Text textAlign={'left'} w={['90vw']} color='scheme.title' fontSize={['3xl']} p={['20px']}>      
      About me
    </Text>
    <Text color='scheme.text' fontSize={['xl','2xl', '3xl','4xl','4xl','4xl']} paddingLeft={['20px']} paddingRight={['20px']} paddingBottom={['20px']}>
      I decided to become a web developer because I felt like I was plateauing and wasn&apos;t going anywhere as a Pharmacist. 
      Since becoming a developer, I have found excitement at the thought of being able to build anything that I can think of. 
      <br/>
      I tend to build projects that either solve inconveniences or are just cool. 
      I figured if it makes my life easier, then it could make somebody else&apos;s easier too.
    </Text>
  </VStack>
)

export default About
