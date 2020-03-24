import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = (props) => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  author
              }
          }
      }
  `)
  return (
    <footer>
      <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer
