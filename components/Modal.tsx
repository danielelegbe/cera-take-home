import axios from 'axios';
import { useState } from 'react';

interface Props {
  name: string;
  slots: string[];
}

export const Modal = ({ name, slots }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);

  const handleScheduleCarer = async () => {
    const response = await axios('https://ceracare.github.io/bookSlot.json');
    if (response.data.success) {
      setIsScheduled(true);
    }
  };

  return (
    <>
      <button
        className="bg-primary text-white px-4 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Check Availability
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50">
            <div className="my-6 mx-auto w-1/4">
              <div className="rounded-lg shadow-lg flex flex-col bg-secondary">
                <div className="flex flex-col items-center p-5">
                  <h4 className="text-3xl">Schedule Carer</h4>
                  <h5 className="text-2xl">{name}</h5>
                </div>
                <div className="p-8 flex flex-col items-center">
                  {isScheduled ? (
                    <p>Scheduled!</p>
                  ) : (
                    slots.map((slot) => (
                      <button
                        key={slot}
                        className="bg-primary text-white mb-6 w-3/4 rounded-md p-1"
                        onClick={handleScheduleCarer}
                      >
                        {slot}
                      </button>
                    ))
                  )}
                </div>
                <div className="flex justify-center pb-6">
                  <button
                    className="bg-primary px-4 py-2 rounded-md text-white"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
