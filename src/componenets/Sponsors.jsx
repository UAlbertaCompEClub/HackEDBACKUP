import React from 'react';
import { sponsor, sponsor2, sponsor3, sponsor4, sponsor5 } from '../assets';

const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-gray-800 py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-pink-500">SPONSORS</span>
        </h2>
        <p className="text-lg mb-8">
          We're grateful for the support of our amazing sponsors who are making
          this event possible.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          <SponsorLogo src={sponsor} />
          <SponsorLogo src={sponsor2} />
          <SponsorLogo src={sponsor3} />
          <SponsorLogo src={sponsor4} />
          <SponsorLogo src={sponsor5} />
        </div>
      </div>
    </section>
  );
};

const SponsorLogo = ({ src }) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow-md p-4">
      <img src={src} alt="Sponsor Logo" className="w-full h-auto object-contain" />
    </div>
  );
};

export default Sponsors;
