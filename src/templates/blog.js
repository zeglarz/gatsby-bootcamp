import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

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

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url}/>;
      }
    }
  };

  return (
    <Layout>
      <Head title={flattenMd.title}/>
      <h1>{flattenMd.title}</h1>
      <p>{flattenMd.date}</p>
      {flattenMd.hasOwnProperty('body') ? documentToReactComponents(flattenMd.body.json, options) :
        <div dangerouslySetInnerHTML={{ __html: flattenMd.html }}></div>}
    </Layout>
  );
};

export default Blog;
