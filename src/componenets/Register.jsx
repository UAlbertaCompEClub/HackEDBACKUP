import React from 'react';

const Register = () => {
  return (
    <section className="bg-gray-800 py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-pink-500">CONFERENCE PASSES</span>
        </h2>
        <div className="bg-gray-700 rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-xl font-bold mb-2">3 DAYS CONFERENCE PASS</h3>
          <p className="text-gray-400 mb-4">
            Full access to the entire 3 day's programming
          </p>
          <input
            type="text"
            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Discount Code"
          />
          <div className="mt-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
              CONTINUE
            </button>
          </div>
        </div>
        <div className="mt-8">
          <img
            src="https://via.placeholder.com/150x100"
            alt="Hackathon Admit One Ticket"
            className="mx-auto"
          />
        </div>
        <p className="text-lg mb-8 mt-8">
          UNLEASH INNOVATION, CODE YOUR DREAMS!
        </p>
      </div>
    </section>
  );
};

export default Register;