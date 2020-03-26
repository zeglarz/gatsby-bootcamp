import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';


const Contact = (props) => {
  return (
    <Layout>
      <Head title='Contact'/>
      <h1>Contact details</h1>
      <ul>
        <li>Telephone: 733 332 231</li>
        <li>Email: konrad.rudnicki@gmail.com</li>
        <li>Twitter <a href="http://twitter.com/zeglarz" target="_blank">@zeglarz</a></li>

      </ul>
    </Layout>
  );
};

export default Contact;
