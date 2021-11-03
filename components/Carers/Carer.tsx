import Image from 'next/image';
import React from 'react';
import ICarer from '../../interfaces/ICarer';
import { Modal } from '../Modal';

interface Props {
  carer: ICarer;
  slots: string[];
}
export const Carer = ({ carer, slots }: Props) => {
  const carerSlots =
    carer.slots > 1 ? `${carer.slots} slots available` : '1 slot available';

  return (
    <div className="flex flex-col m-10 w-1/4">
      <div className="relative h-56 w-56 self-center">
        <Image
          src={carer.photo}
          alt="Carer Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-6 flex justify-between">
        <div className="">
          <p>{carer.name}</p>
          <p className="text-primary">{carerSlots}</p>
        </div>
        <Modal name={carer.name} slots={slots} />
      </div>
    </div>
  );
};
