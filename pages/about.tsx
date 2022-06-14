import React from 'react'
import { Text } from '@chakra-ui/react'
 
const About = () => (
  <>
    <Text color='gray' fontSize={['xl','3xl']} marginLeft={['20px','200px']} marginBottom={['20px','20px']}>      
      About me
    </Text>
    <Text fontSize={['lg','4xl']}  h={['24vh','27.7vh']} align='center' margin={['20px', '0px']}>
      i like to code things that either interest me or solve my problems. 
      <br />
      i&apos;m interested in a lot of things and have a lot of first world problems.
      <br />
      pursuing random hobbies is my biggest hobby
    </Text>
  </>
)

export default About
