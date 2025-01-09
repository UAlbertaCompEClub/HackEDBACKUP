import React from 'react';
import { sponsor, sponsor2, sponsor3, sponsor4, sponsor5, dive, restiv } from '../assets';

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 opacity-30 blur-[120px] rounded-full w-[500px] h-[500px] top-10 left-10 animate-pulse"></div>
        <div className="bg-gradient-to-br from-blue-500 via-teal-500 to-green-400 opacity-30 blur-[120px] rounded-full w-[500px] h-[500px] bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
          Our Sponsors
        </h2>

        {/* Title Sponsor */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Title Sponsor</h3>
          <div className="flex justify-center items-center">
            <div className="rounded-lg border-8 border-yellow-400 bg-yellow-100 shadow-xl p-6 w-60 h-60 flex items-center justify-center">
              <img src={sponsor} alt="Lantern" className="w-40 h-40 object-contain" />
            </div>
          </div>
          <p className="text-lg text-gray-300 mt-4">
            A huge thanks to <span className="text-yellow-400 font-bold">Lantern</span> for being our esteemed Title Sponsor!
          </p>
        </div>

        {/* Gold Sponsors */}
        <h3 className="text-3xl font-semibold text-teal-400 mb-6">Gold Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          <SponsorLogo src={sponsor2} level="gold" />
          <SponsorLogo src={sponsor3} level="gold" />
        </div>

        {/* Special Sponsors */}
        <h3 className="text-3xl font-semibold text-teal-600 mb-6">Special Thanks</h3>
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          <SponsorLogo src={sponsor4} level="silver" />
        </div>

        {/* Special Thanks */}
        <h3 className="text-3xl font-semibold text-blue-400 mb-6">Special Thanks</h3>
        <p className="text-lg text-gray-300 mb-8">
          We are immensely grateful to all our contributors and supporters for their invaluable help.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {/* <SponsorLogo src={dive} level="none" /> */}
          {/* <SponsorLogo src={sponsor} level="none" /> */}
        </div>
      </div>
    </section>
  );
};

const SponsorLogo = ({ src, level }) => {
  const levelClass = {
    gold: "border-teal-400 bg-teal-50",
    silver: "border-teal-200 bg-teal-100",
    bronze: "border-teal-600 bg-teal-200",
    none: "bg-teal-100",
  }[level] || "border-teal-700";

  return (
    <div
      className={`rounded-lg shadow-md p-4 border-4 ${levelClass} w-40 h-40 flex items-center justify-center transition-transform transform hover:scale-105`}
    >
      <img src={src} alt="Sponsor Logo" className="w-24 h-24 object-contain" />
    </div>
  );
};

export default Sponsors;
