import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"


const Contact = (props) => {
  return (
    <div>
      <Header/>
      <h1>Contact details</h1>
      <ul>
        <li>Telephone: 733 332 231</li>
        <li>Email: konrad.rudnicki@gmail.com</li>
        <li>Twitter <a href="http://twitter.com/zeglarz" target="_blank">@zeglarz</a></li>

      </ul>
      <Footer/>
    </div>
  )
}

export default Contact
