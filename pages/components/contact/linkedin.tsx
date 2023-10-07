import { AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

const Linkedin = () => {
  return (
    <>
      <AiFillLinkedin />
      <Link
        href="https://www.linkedin.com/in/tim-liew-a9572b20b/"
        target="_blank"
      >
        Tim Liew
      </Link>
    </>
  )
}

export default Linkedin
