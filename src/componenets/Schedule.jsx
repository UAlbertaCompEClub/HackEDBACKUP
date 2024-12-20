import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-2xl rounded-full w-96 h-96 top-10 left-20 animate-pulse"></div>
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full w-96 h-96 bottom-10 right-20 animate-pulse"></div>
      </div>

      <div className="container relative mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-8">
          Schedule
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          Join us from February 15-17th to hack your way to something new, whether you're learning to code for the first time or flexing your hacking muscle trying to build the next big thing. Bring on the challenge, bring your ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScheduleDay
            day="February 15th"
            time="9:00am - 9:30am"
            title="Kickoff and Orientation"
            icon="🎰"
          />
          <ScheduleDay
            day="February 16th"
            time="All Day"
            title="Workshops & Hacking"
            icon="💻"
          />
          <ScheduleDay
            day="February 17th"
            time="11:00am"
            title="Hacking Ends & Demos"
            icon="📡"
          />
        </div>
      </div>
    </section>
  );
};

const ScheduleDay = ({ day, time, title, icon }) => {
  return (
    <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:bg-gray-700">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2">
        {day}
      </h3>
      <p className="text-lg text-gray-300 font-medium mb-4">{time}</p>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};

export default Schedule;
