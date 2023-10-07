import { Linkedin, Email } from './components/contact/'

const Contact = () => {
  return (
    <>
      <div>Get In Touch</div>
      <h3>
        Feel free to flick through an email or DM on LinkedIn. I&apos;ll gladly
        have a yarn.
      </h3>

      <Email />
      <Linkedin />
    </>
  )
}

export default Contact
