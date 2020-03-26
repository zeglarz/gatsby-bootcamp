const path = require('path');

module.exports.onCreateNode = ({ node, actions: { createNodeField } }) => {

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

module.exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const res = await graphql(`query {
  allMarkdownRemark {
    edges {
      node {
fields {
  slug
}
      }
    }
  }
   allContentfulBlogPost {
  edges {
  node {
  slug
  }
  }
  }
}`);

  const flattenMd = res.data.allMarkdownRemark.edges.map(edge => ({
    node: {
      slug: edge.node.fields.slug
    }

  }));

  const contentfulRes = res.data.allContentfulBlogPost.edges;

  const postArr = [...flattenMd, ...contentfulRes];
  console.log(postArr);
  postArr.forEach(edge => createPage({
    component: blogTemplate,
    path: `/blog/${edge.node.slug}`,
    context: {
      slug: edge.node.slug
    }
  }));
};
