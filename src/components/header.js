import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./heades.module.scss"

const Header = (props) => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <header className={headerStyles.header}>
      <Link to='/' className={headerStyles.title}>
        {data.site.siteMetadata.title}
      </Link>

      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
          </li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}
                    to='/about'>About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blog</Link>
          </li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}
                    to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
