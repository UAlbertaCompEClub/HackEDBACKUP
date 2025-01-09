import React from 'react';
import { dice } from '../assets';

const Info = () => {
  return (
    <section id="info" className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div
          className="bg-gradient-to-br from-teal-400 via-cyan-500 to-green-500 opacity-30 blur-2xl rounded-full w-96 h-96 animate-move"
          style={{ top: '10%', left: '20%' }}
        ></div>
        <div
          className="bg-gradient-to-br from-green-500 via-cyan-500 to-teal-400 opacity-30 blur-2xl rounded-full w-96 h-96 animate-move"
          style={{ bottom: '15%', right: '25%' }}
        ></div>
      </div>

      <div className="relative container mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-6xl font-extrabold text-white mb-10 drop-shadow-lg">
          Event
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500">
            Location
          </span>
        </h2>

        {/* Location Details Card */}
        <div className="bg-gray-800 bg-opacity-90 rounded-xl shadow-2xl p-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            src={dice}
            alt="DICE Building"
            className="w-full h-48 rounded-lg object-cover mb-6 shadow-md"
          />
          <div className="text-white">
            <p className="text-2xl font-bold mb-3">
              8th Floor Donadeo Innovation Centre for Engineering
            </p>
            <p className="text-lg font-medium mb-1">University of Alberta</p>
            <p className="text-sm">9211 116 St NW</p>
            <p className="text-sm">Edmonton, AB T6G 1H9</p>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="bg-gray-800 bg-opacity-90 rounded-xl shadow-2xl p-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto mt-8 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">
            For further info, contact us:
          </h3>
          <div className="text-left text-white">
            <p className="mb-3">
              <span className="font-bold">Website: </span>
              <a
                href="https://compeclub.com"
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500"
                aria-label="Visit CompE Club website"
              >
                compeclub.com
              </a>
            </p>
            <p className="mb-3">
              <span className="font-bold">Email: </span>
              <a
                href="mailto:hacked@compeclub.com"
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500"
                aria-label="Email us at hacked@compeclub.com"
              >
                hacked@compeclub.com
              </a>
            </p>
            <p className="mb-3">
              <span className="font-bold">Twitter: </span>
              <a
                href="https://twitter.com/CompEClub"
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500"
                aria-label="Follow us on Twitter"
              >
                @CompEClub
              </a>
            </p>
            <p className="mb-3">
              <span className="font-bold">Instagram: </span>
              <a
                href="https://instagram.com/CompEClub"
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500"
                aria-label="Follow us on Instagram"
              >
                @CompEClub
              </a>
            </p>
            <p className="mb-3">
              <span className="font-bold">HackED Instagram: </span>
              <a
                href="https://instagram.com/hacked_compeclub"
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500"
                aria-label="Follow HackED on Instagram"
              >
                @hacked_compeclub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
