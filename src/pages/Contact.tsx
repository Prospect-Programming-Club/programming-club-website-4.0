import Navbar from '../components/navbar';
import Head from "./contact/head"


export default function Contact() {
  const email =  `prospectprogramming@gmail.com`;
  const emailLink = `mailto:${email}`;
  return (
    <>
      <Navbar />
      <Head />
     <h1>Email: <a className = "about-link" href = {emailLink}>{email}</a></h1>
     <br />
     <p className = "contact-p">But wait, how do I join the discord server?</p>
     <p className = "contact-p">To prevent abuse, raids, and other things like that, email the address above to get an invite, or attend a meeting and ask one of the club leaders.</p>
     <p className = "contact-p">Thank you for understanding!</p>
    </>
  )
}