import React from "react"
import { Link } from "gatsby"

import headerStyles from "./heades.module.scss"

const Header = (props) => {
  return (
    <div>
      <p>My portfolio Webpage</p>
      <nav>
        <ul>
          <li><Link className={headerStyles.link} to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
