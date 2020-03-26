import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
    query (
        $slug: String!
    ){
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        )
        {
            frontmatter {
                title
                date
            }
            html
        }
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            date: publishedDate
        }
    }
`;


const Blog = ({ data }) => {

  const flattenMd = data.contentfulBlogPost || {
    title: data.markdownRemark.frontmatter.title,
    date: data.markdownRemark.frontmatter.date
  };


  return (
    <Layout>
      <h1>{flattenMd.title}</h1>
      <p>{flattenMd.date}</p>

    </Layout>
  );
};

export default Blog;
