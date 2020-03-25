import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"

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
      <h2>Posts</h2>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.sort((a, b) => Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date)).map(post =>
          <li className={blogStyles.post}>
            <Link to={`/blog/${post.node.fields.slug}`}><h1>{post.node.frontmatter.title}</h1>
              <p>{post.node.frontmatter.date}</p>
            </Link>
          </li>)}
      </ol>
    </Layout>
  )
}

export default BlogPage
