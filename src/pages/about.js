import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const About = (props) => {
  return (
    <Layout>
      <h1>About page</h1>
      <p>I'm junior full stack developer trying to land my first job in IT</p>
      <p>Like what you see? <Link to='/contact'>Contact Page</Link></p>
    </Layout>
  )
}

export default About
