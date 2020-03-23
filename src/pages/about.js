import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const About = (props) => {
  return (
    <div>
      <Header/>
      <h1>About page</h1>
      <p>I'm junior full stack developer trying to land my first job in IT</p>
      <p>Like what you see? <Link to='/contact'>Contact Page</Link></p>
      <Footer/>
    </div>
  )
}

export default About
