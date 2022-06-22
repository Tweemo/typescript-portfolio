import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import Hobbies from './hobbies'
 
const About = () => (
  <>
    <Text color='gray' fontSize={['xl','3xl']} marginLeft={['20px','20vw']} marginBottom={['20px','20px']}>      
      About me
    </Text>
    <Box fontSize={['lg','4xl']}  h={['24vh','27.7vh']}  margin={['20px', '0px']}>
      <Text align='center'>
      I like to code things that either interest me or solve problems. 
      <br />
      I&apos;m interested in many things and have many solutions.
      <br />
      </Text>
      <Hobbies />
    </Box>
  </>
)

export default About
