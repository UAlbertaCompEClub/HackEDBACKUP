import React from 'react';
import { dice } from '../assets';

const Info = () => {
  return (
    <section id='info' className="bg-gray-800 py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-extrabold mb-8 ">
          Event
          <br />
          <span className="text-pink-500">Location</span>
        </h2>
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto transform transition duration-500 hover:scale-105">
          <img
            src={dice}
            alt="DICE"
            className="w-full h-auto rounded-lg object-cover mb-4"
          />
          <div className="text-white">
            <p className="text-xl font-semibold mb-2">
              8th Floor Donadeo Innovation Centre for Engineering
            </p>
            <p className="text-lg font-medium">University of Alberta</p>
            <p className="mt-1">9211 116 St NW</p>
            <p>Edmonton, AB T6G 1H9</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-lg p-6 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto mt-10 transform transition duration-500 hover:scale-105">
          <h3 className="text-2xl font-bold text-white mb-4">
            For further info, please contact:
          </h3>
          <div className="text-white text-left">
            <p className="mb-2">
              Website:{" "}
              <a
                href="https://compeclub.com"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                compeclub.com
              </a>
            </p>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:hacked@compeclub.com"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                hacked@compeclub.com
              </a>
            </p>
            <p className="mb-2">
              Twitter:{" "}
              <a
                href="https://twitter.com/CompEClub"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                @CompEClub
              </a>
            </p>
            <p className="mb-2">
              Instagram:{" "}
              <a
                href="https://instagram.com/CompEClub"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                @CompEClub
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                href="https://instagram.com/hacked_compeclub"
                className="text-pink-500 hover:text-pink-400 transition-colors"
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
