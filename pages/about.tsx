import React from 'react'
import { Text } from '@chakra-ui/react'
 
const About = () => (
  <>
    <Text color='gray' fontSize={['xl','2xl','3xl']} marginLeft={['20px','70px','300px']} marginBottom={['20px','20px']}>      
      About me
    </Text>
    <Text fontSize={['xl','2xl','4xl']}  h={['28.5vh','27.7vh']} align='center' margin={['20px','5px', '0px']}>
      I like to code things that either interest me or solve problems. 
      <br />
      I&apos;m interested in many things and have many solutions.
      <br />
      Pursuing random hobbies is my biggest hobby.
    </Text>
  </>
)

export default About
