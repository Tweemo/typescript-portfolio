import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

const Hobbies = () => {

  const hobbyArray: string[] = ['Coding', 'Basketball', 'Football', 'Badminton', 'Golf', 'Fishing', 'Gaming', 'Volleyball', 'Photography']
  const [hobbyCount, setHobbyCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      if (hobbyCount === hobbyArray.length - 1) {
        setHobbyCount(0)
      } else if (hobbyCount < hobbyArray.length) {
        setHobbyCount(hobbyCount + 1);
      }
    }, 1500)
  })

  return (
    <Box textAlign='center'>
      My current hobbies are 
      <Box border='2px' borderColor='black' borderRadius='lg' boxShadow='xl' w={['15vh', '15vw']} className={styles.hobbies}>
        {hobbyArray[hobbyCount]}
      </Box>
    </Box>
    )
  }

  export default Hobbies