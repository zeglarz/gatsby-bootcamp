import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header/>
      <h1>Hello</h1>
      <h2>I'm Konrad, a junior full stack developer living in beautiful Warsaw</h2>
      <Link to='/contact'>Contact page</Link>
      <Footer/>
    </div>
  )
}

export default IndexPage
