import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const Blog = ({ location }) => {
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter {
                          title
                          date
                      }
                      html
                      excerpt
                      fields {
                          slug
                      }
                  }
              }
          }
      }
  `)

  const currPost = data.allMarkdownRemark.edges.find(post => post.node.fields.slug === location.pathname.split("/")[2])
  console.log(currPost)
  return (
    <Layout>
      <h1>{currPost.node.frontmatter.title}</h1>
      <p>{currPost.node.frontmatter.date}</p>
      <p>{currPost.node.excerpt}</p>

    </Layout>
  )
}

export default Blog
