import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ICarer from '../../interfaces/ICarer';
import { Carer } from './Carer';

interface Props {
  allCarers: ICarer[];
}

export const AllCarers = ({ allCarers }: Props) => {
  const [slots, setSlots] = useState<string[]>([]);

  useEffect(() => {
    axios('https://ceracare.github.io/availableSlots.json').then((res) => {
      setSlots(res.data.UTCAvailableSlots);
    });
  }, []);

  return (
    <main className="container flex flex-wrap mx-auto justify-center ">
      {allCarers.map((carer) => (
        <Carer key={carer.name} carer={carer} slots={slots} />
      ))}
    </main>
  );
};
