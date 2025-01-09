import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-green-500 opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 z-0 bg-noise opacity-10"></div>
      
      <div className="relative z-10 container mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white">
          <span className="block">Welcome to</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500">
            HackED 2025
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mt-6 text-gray-300">
          Innovate. Collaborate. Create. Join the University of Alberta’s biggest 48-hour hackathon and build the future with the brightest minds in tech!
        </p>

        {/* Call-to-action */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://docs.google.com/forms/d/1ls6dmQELwGn8hvG5O2efnphKssnm5PJSZu2d0eOGtNY/edit"
            className="inline-block px-8 py-4 text-lg font-bold text-white bg-teal-400 hover:bg-teal-500 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Register Now
          </a>
          <a
            href="#Home"
            className="inline-block px-8 py-4 text-lg font-bold text-teal-400 border-2 border-teal-400 hover:bg-teal-400 hover:text-gray-900 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
