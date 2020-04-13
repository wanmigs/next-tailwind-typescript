import { NextPage } from 'next';

const About: NextPage = () => (
  <div>
    <h1>About page!</h1>
  </div>
);

About.getInitialProps = () => {
  return {
    title: 'About',
  };
};

export default About;
