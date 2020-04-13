import Head from 'next/head';

interface Props {
  title?: string;
}

const HeadComponent: React.FC<Props> = ({ title = '' }) => {
  return (
    <Head>
      <title>{title} | Smartspaces</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};

export default HeadComponent;
