import {
  Center,
  Link,
  Text,
} from '@chakra-ui/react'

const NavContact = () => {
  
  return (
    <Center>
      <Link href='#contact'>
        <Text color='scheme.text' fontSize={['2xl','2xl','2xl', '3xl']}>
          Contact
        </Text>
      </Link> 
    </Center>   
    )
  }

  export default NavContact