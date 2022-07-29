import {
  Center,
  Link,
  Text,
} from '@chakra-ui/react'

const NavProject = () => {
  
  return (
    <Center>
      <Link href='#projects'>
        <Text color='scheme.text' fontSize={['2xl','2xl','2xl', '3xl']}>
          Projects
        </Text>
      </Link>
    </Center>
    )
  }

  export default NavProject