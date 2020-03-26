import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import blogStyles from './blog.module.scss';

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
          allContentfulBlogPost {
              edges {
                  node {
                      title
                      slug
                      date: publishedDate

                  }
              }
          }
      }
  `);

  const flattenMd = data.allMarkdownRemark.edges.map(edge => ({
    node: {
      title: edge.node.frontmatter.title,
      date: edge.node.frontmatter.date,
      html: edge.node.html,
      slug: edge.node.fields.slug
    }

  }));

  const postArr = [...flattenMd, ...data.allContentfulBlogPost.edges];
  return (
    <Layout>
      <h1>My blog</h1>
      <h2>Posts</h2>
      <ol className={blogStyles.posts}>
        {postArr.sort((a, b) => Date.parse(b.node.date) - Date.parse(a.node.date)).map(post =>
          <li className={blogStyles.post}>
            <Link to={`/blog/${post.node.slug}`}><h1>{post.node.title}</h1>
              <p>{post.node.date}</p>
            </Link>
          </li>)}
      </ol>
    </Layout>
  );
};

export default BlogPage;
