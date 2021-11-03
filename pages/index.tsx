import type { InferGetServerSidePropsType } from 'next';
import { Header } from '../components/Header';
import { AllCarers } from '../components/Carers/AllCarers';
import axios from 'axios';
import Carer from '../interfaces/ICarer';

const Home = ({
  allCarers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Header />
      <AllCarers allCarers={allCarers} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const data = (await axios('https://ceracare.github.io/carers.json')).data;

  const allCarers: Carer[] = data.carers;

  return {
    props: {
      allCarers,
    },
  };
};
