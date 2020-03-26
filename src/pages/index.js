import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/layout';

const IndexPage = () => {

  return (
    <Layout>
      <Head title='Home'/>
      <h1>Hello</h1>
      <h2>I'm Konrad, a junior full stack developer living in beautiful Warsaw</h2>
      <Link to='/contact'>Contact page</Link>
    </Layout>
  );
};

export default IndexPage;
