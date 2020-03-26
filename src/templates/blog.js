import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
            date: publishedDate(formatString: "YYYY-MM-DD")
            body {
                json
            }
        }
    }
`;


const Blog = ({ data }) => {

  const flattenMd = data.contentfulBlogPost || {
    title: data.markdownRemark.frontmatter.title,
    date: data.markdownRemark.frontmatter.date,
    html: data.markdownRemark.html
  };


  return (
    <Layout>
      <h1>{flattenMd.title}</h1>
      <p>{flattenMd.date}</p>
      {flattenMd.hasOwnProperty('body') ? documentToReactComponents(flattenMd.body.json) :
        <div dangerouslySetInnerHTML={{ __html: flattenMd.html }}></div>}
    </Layout>
  );
};

export default Blog;
