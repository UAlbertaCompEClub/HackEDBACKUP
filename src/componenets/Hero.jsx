import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          HACKED
          <br />
          <span className="text-pink-500">2025</span>
          <br />
        </h2>
        <p className="text-lg mb-8">
        Hackathons are for designing, creating, and building awesome projects. This year HackED is a 48-hour hackathon from the Computer Engineering Club of the University of Alberta.

        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
{/*         <a href="https://docs.google.com/forms/d/e/1FAIpQLSewv6xgpW_XlPPJ5bN2yMBpyniYIsH_ouZE1RlgKKe6EN2tIg/viewform" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"> */}
  REGISTRATION OPEN SOON
{/*         </a> */}
        </button>
      </div>
    </section>
  );
};

export default Hero;
