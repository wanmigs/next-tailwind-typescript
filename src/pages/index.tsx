import React, { useEffect } from 'react';
import { NextPage } from 'next';
import axios from 'helpers/axios';

import { useFloorState, useFloorDispatch } from 'service/floors';
import FloorItem from './_home/components/FloorItem';
import { Floor } from 'models/floor.model';

interface Props {
  title?: string;
  floorsData?: Floor[];
}

const Home: NextPage<Props> = ({ floorsData }) => {
  const { floors } = useFloorState();
  const dispatch = useFloorDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_FLOORS', floors: floorsData });
  }, []);

  const renderFloors = () =>
    floors.map((floor, key) => <FloorItem floor={floor} key={key} />);

  return (
    <section className=''>
      <div className='flex justify-center mb-6'>
        <div className='flex flex-col items-center justify-center'>
          <img
            className='block h-8 mb-2 w-auto'
            src='/images/logo.png'
            alt='logo'
          />
          <span className='font-bold md:text-4xl text-2xl'>
            Welcome to 45 George St.
          </span>
        </div>
      </div>
      <section className='max-w-2xl mx-auto'>{renderFloors()}</section>
    </section>
  );
};

Home.getInitialProps = async () => {
  const { data } = await axios.get('/data/floors.json');

  return {
    title: 'Home',
    floorsData: data,
  };
};

export default Home;
