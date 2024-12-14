import React from 'react';
import { sponsor, sponsor2, sponsor3, sponsor4, sponsor5, dive, restiv } from '../assets';

const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-gray-800 py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-pink-500">SPONSORS</span>
        </h2>
        <p className="text-lg mb-8">
          We're grateful for the support of our amazing sponsors who are making this event possible.
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
