import React from 'react'
import { Center, Text } from '@chakra-ui/react'
 
const About = () => (
  <>
    <Text color='scheme.title' fontSize={['xl','2xl','3xl','4xl', '4xl','5xl']} marginLeft={['20px','70px','200px','300px', '30vh']} marginBottom={['20px','20px','30px','30px','50px']}>      
      About me
    </Text>
    <Center>
      <Text color='scheme.text' fontSize={['xl','2xl', '3xl','4xl','4xl','4xl']}  h={['28.5vh','30vh','30vh','27vh', '25vh', '31.5vh']} w={['80vw']} align='center' margin={['20px','5px', '0px']}>
        I decided to become a web developer because I felt like I was plateauing and wasn&apos;t going anywhere as a Pharmacist. 
        Since becoming a developer, I have found excitement at the thought of being able to build anything that I can think of. 
        <br/>
        I tend to build projects that either solve inconveniences or are just cool. 
        I figured if it makes my life easier, then it could make somebody else&apos;s easier too.
      </Text>
    </Center>
  </>
)

export default About
