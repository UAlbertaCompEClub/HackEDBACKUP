import React from 'react';

const Prizes = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-pink-500">PRIZES</span>
        </h2>
        <p className="text-lg mb-8">
          Get ready to launch your project! The top performers will receive
          awards, prizes, and recognition
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <PrizeCard
            title="METAVERSE VISIONARY"
            amount="$50K"
            imageUrl="https://via.placeholder.com/150x100"
          />
          <PrizeCard
            title="Immersive Interaction"
            amount="$30K"
            imageUrl="https://via.placeholder.com/150x100"
          />
          <PrizeCard
            title="Virtual Crowd's Choice"
            amount="$10K"
            imageUrl="https://via.placeholder.com/150x100"
          />
          <PrizeCard
            title="Metaverse for Good"
            amount="$10K"
            imageUrl="https://via.placeholder.com/150x100"
          />
        </div>
      </div>
    </section>
  );
};

const PrizeCard = ({ title, amount, imageUrl }) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow-md p-6 text-center">
      <img src={imageUrl} alt={title} className="w-full mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-2">{amount}</p>
      <p className="text-gray-400">
        Prepare for the project launch! Outstanding contributors will be
        rewarded with awards, prizes, and acknowledgment.
      </p>
    </div>
  );
};

export default Prizes;