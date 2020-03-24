import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const BlogPage = (props) => {
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
  return (
    <Layout>
      <h1>My blog</h1>
      <p>Posts will show up here later on.</p>
      <h2>Posts</h2>
      <ol>
        {data.allMarkdownRemark.edges.sort((a, b) => Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date)).map(post =>
          <li>
            <Link to={`/blog/${post.node.fields.slug}`}><h1>{post.node.frontmatter.title}</h1></Link>
            <p>{post.node.frontmatter.date}</p><p>{post.node.excerpt}</p>
          </li>)}
      </ol>
    </Layout>
  )
}

export default BlogPage
