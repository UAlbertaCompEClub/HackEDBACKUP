import React from 'react';
import { sponsor, sponsor2, sponsor3, sponsor4, sponsor5, dive, restiv } from '../assets';

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-2xl rounded-full w-96 h-96 top-10 left-20 animate-pulse"></div>
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full w-96 h-96 bottom-10 right-20 animate-pulse"></div>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-8">SPONSORS</span>
        </h2>
        <p className="text-lg mb-8">
          {/* We're grateful for the support of our amazing sponsors who are making this event possible. Thank you to our Title Sponsor Lantern. Our Gold Sponsors Garmin and UofA Research and Innovation. And a special thanks to eHUB Entrepreneurship Centre.  */}
        </p>
        {/* Gold Sponsors */}
        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Gold Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* <SponsorLogo src={sponsor2} level="gold" /> */}
          {/* <SponsorLogo src={sponsor4} level="gold" /> */}
        </div>

        {/* Silver Sponsors */}
        <h3 className="text-2xl font-semibold mb-4 text-gray-400">Silver Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          
          {/* <SponsorLogo src={sponsor5} level="silver" /> */}
          {/* <SponsorLogo src={restiv} level="silver" /> */}
        </div>

        {/* Bronze Sponsors */}
        <h3 className="text-2xl font-semibold mb-4 text-yellow-700">Bronze Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* <SponsorLogo src={sponsor3} level="bronze" /> */}
          
        </div>

        {/* Special Thanks */}
        <h3 className="text-2xl font-semibold mb-4 text-pink-500">Special Thanks</h3>
        <p className="text-lg text-gray-300 mb-8">
          A heartfelt thank you to all our contributors and supporters for their invaluable help.
          
        </p>
        <div className='flex flex-wrap justify-center gap-8 mt-2'>
          {/* <SponsorLogo src={dive} level="none" /> */}
          {/* <SponsorLogo src={sponsor} level="none" /> */}
        </div>
      </div>
    </section>
  );
};

const SponsorLogo = ({ src, level }) => {
  const levelClass = {
    gold: "border-yellow-500 bg-yellow-100",
    silver: "border-gray-400 bg-gray-100",
    bronze: "border-yellow-600 bg-yellow-300",
    none: " bg-gray-100",
  }[level] || "border-gray-700";

  return (
    <div className={`rounded-lg shadow-md p-2 border-4 ${levelClass} w-40 h-40 flex items-center justify-center`}>
      <img src={src} alt="Sponsor Logo" className="w-20 h-20 object-contain" />
    </div>
  );
};

export default Sponsors;
