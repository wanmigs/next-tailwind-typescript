import { NextPage } from 'next';
import Button from 'components/Button';

const Home: NextPage = () => (
  <div>
    <h1>Hello worlds!</h1>
    <Button className='bg-blue-500 hover:bg-blue-600 text-white'>Test</Button>
  </div>
);

Home.getInitialProps = () => {
  return {
    title: 'Home',
  };
};

export default Home;
