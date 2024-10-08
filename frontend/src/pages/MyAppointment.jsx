import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <p className="text-2xl font-bold text-gray-800 mb-6 text-center">My Appointments</p>
      <div className="space-y-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-md flex space-x-6 items-start"
          >
            <div className="w-1/4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>

            <div className="w-3/4">
              <p className="text-xl font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>

              <div className="mt-4">
                <p className="font-medium text-gray-700">Address:</p>
                <p className="text-gray-600">{item.address.Line1}</p>
                <p className="text-gray-600">{item.address.Line2}</p>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                <span className="font-semibold">Date & Time: </span>27, September, 2024 | 8:30 PM
              </p>
            </div>

            <div className="w-1/4 flex flex-col space-y-2 mt-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Pay Online
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
