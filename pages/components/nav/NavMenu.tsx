import {
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
} from '@chakra-ui/react'
import { 
  AiOutlineMenu, 
  AiOutlineHome, 
  AiOutlineProject, 
  AiOutlineMail } from 'react-icons/ai'
import {NavProject, NavContact} from './'

const NavMenu = () => {
  
  return (
    <Menu>
      <MenuButton>
        <Center>
          <AiOutlineMenu />
        </Center>
      </MenuButton>
      <MenuList>
        <Link href='#'>
          <MenuItem icon={<AiOutlineHome />}>
            Home
          </MenuItem>
        </Link>
        <Link href='#projects'>
          <MenuItem icon={<AiOutlineProject />}>
            Projects
          </MenuItem>
        </Link>
        <Link href='#contact'>
          <MenuItem icon={<AiOutlineMail />}>
            Contact
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
    )
  }

  export default NavMenu