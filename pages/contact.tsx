import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Contact() {
  return (
    <div>
      <div>Get In Touch</div>
      <h3>
        Feel free to flick through an email or DM on LinkedIn. I&apos;ll gladly
        have a yarn.
      </h3>
      <AiOutlineMail />
      <a href="mailto: timothywrliew@gmail.com">Timothywrliew@gmail.com</a>
      <AiFillLinkedin />
      <Link
        href="https://www.linkedin.com/in/tim-liew-a9572b20b/"
        target="_blank"
      >
        Tim Liew
      </Link>
    </div>
  )
}
