import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className="bg-gray-900 py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-pink-500">Schedule</span>
        </h2>
        <p className="text-lg mb-8">
        Join us over the weekend of November 9th to hack your way to something new, whether you're learning to code for the first time or flexing your hacking muscle trying to build the next big thing. Bring on the challenge, bring your ideas to life.


        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <ScheduleDay day="10:30am - 11:00am" title="Kickoff and Orientation" />
        <ScheduleDay day="11:00am - 11:00am (next day)" title="Building and Collaborating" />
        <ScheduleDay day="11am - 12pm " title="Presentation and Judging" />
        </div>
      </div>
    </section>
  );
};

const ScheduleDay = ({ day, title }) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow-md p-6 text-center">
      <h3 className="text-xl font-bold mb-2">{day}</h3>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};

export default Schedule;
