import React from 'react';
import Head from 'components/Head';
import Header from 'components/Header';
interface Props {
  children: JSX.Element | string | null;
  title?: string;
}

const SiteLayout: React.FC<Props> = ({ children, title = '' }) => (
  <div className='antialiased flex flex-col h-screen'>
    <Head title={title} />
    <Header />
    <section className='container mx-auto p-6'>{children}</section>
  </div>
);

export default SiteLayout;
