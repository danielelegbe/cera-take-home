import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

export const Header = () => {
  const currentTime = format(Date.now(), 'HH:mm a');
  return (
    <header className="bg-primary py-8 px-10 flex">
      <div className="mr-16">
        <Image src="/cera_logo.png" alt="Cera logo" width="160" height="70" />
      </div>
      <div className="flex justify-between w-full text-white">
        <div>
          <h2 className="text-4xl mb-3 font-light">Carers</h2>
          <h4 className="text-2xl font-light">
            Here you’ll be able to schedule your carers visits
          </h4>
        </div>
        <p className="self-center text-2xl">{currentTime}</p>
      </div>
    </header>
  );
};
