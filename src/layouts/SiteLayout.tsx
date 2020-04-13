import React from 'react';
import Head from 'components/Head';
import Header from 'components/Header';

const SiteLayout = ({ children, title = '', ...rest }) => (
  <div className='antialiased flex flex-col h-screen'>
    <Head title={title} {...rest} />
    <Header />
    <section className='container mx-auto p-6'>{children}</section>
  </div>
);

export default SiteLayout;
