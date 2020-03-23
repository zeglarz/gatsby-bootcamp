import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {

  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Konrad, a junior full stack developer living in beautiful Warsaw</h2>
      <Link to='/contact'>Contact page</Link>
    </Layout>
  )
}

export default IndexPage
