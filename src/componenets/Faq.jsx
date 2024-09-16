import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const faqCategories = {
    General: [
      {
        question: "What happens at a hackathon?",
        answer:
          "For 24 hours, participants work together in teams of 1 to 5 people to build a project. Teams can work on hardware or software projects. There is no limit on creativity. This hackathon acts as a sort of incubator to your mini projects as it provides a focused time to work on your idea with mentors and workshops to help you along. For the project, absolutely no code can be written before or after the 24 hour window, but feel free to plan or research before hand! At the end of the event, each team will present their work and will be judged for prizes.",
      },
      {
        question: "Where is HackED Beta hosted?",
        answer:
          "HackED Beta will be held at Donadeo Innovation Centre for Engineering - University of Alberta (Donadeo Innovation Centre for Engineering, 9211 116 Street Northwest 8th Floor Edmonton, AB).",
      },
      {
        question: "Do I need to know programming?",
        answer:
          "Not at all! The hackathon’s purpose is to create a welcoming and supportive environment to learn. This hackathon is specifically made for beginner hackers who have participated in no more than one prior hackathon. The hackathon has plenty of mentors and resources to help you work on your hack. It’s the best place to try something new.",
      },
      {
        question: "Who organizes HackED Beta ?",
        answer:
          "HackED Beta is an event by the Computer Engineering Club of the University of Alberta.",
      },
      {
        question: "HackED Beta is a competition but do I have to compete and present?",
        answer:
          "After hacking ends, judges will ask you to demo your work. However it is not mandatory, You can opt out before presentations begin on Sunday. That being said, presenting is highly recommended as part of the hackathon experience. Still, the most important part of this hackathon is that you come out of it having tried something new.",
      },
    ],
    Application: [
        {
            question: "Where do I apply?",
            answer:
              "You can use the section down below to purchase tickets, or follow the link at the top of the page to go to the eventbrite.",
          },
          {
            question: "How much is the event?",
            answer:
              "Entry fee is $5 CAD.",
          },
          {
            question: "When is the application deadline?",
            answer:
            "TBD"
          },
          {
            question: "Who can apply?",
            answer:
              "To make this specifically a beginner targeted event, we allow any student who is in highschool or university, who is over the age of 18, and has participated in no more than one previous hackathon. Rare exceptions can be made if participants have little to no prior experience with hacking or programming in general. If you believe you are a novice hacker despite not meeting these requirements, contact hacked@compeclub.com for more information.",
          }
    ],
    Hacking: [
        {
            question: "But I don’t have a team!",
            answer:
                "There will be opportunities for willing participants to look for, make or join a team before and at the hackathon through the Discord and after opening ceremonies. If you want to hack as a team, be sure to be proactive during these opportunities! Alternatively, if you have a team and want to find an additional member, these are also opportunities for your team.",
            },
            {
            question: "But I don’t have any ideas!",
            answer:
                "Don’t let this detract you from participating! There is a lot of time and inspiration at the event! A good recommendation for coming up with ideas is to think about annoyances in your everyday life that you could potentially solve. Talk to your friends and family to help you!",
            },
          {
            question: "How will judging work?",
            answer:
              "Judging will be done by hand picked Judges from industry. The criteria will be released closer to event.",
          },
      
    ],
    Logistics: [
    {
        question: "Do I have to be in Computer Engineering/Computer Science to participate in this hackathon?",
        answer:
            "Not at all! Any student interested in participating, regardless of skill, faculty or school is welcome to join.",
        },
        {
        question: "How’s the wifi situation?",
        answer:
            "The wifi situation is very good. We recommend you download your tools before hand just to avoid any potential network slowdowns.",
        },
      {
        question: "What should I bring?",
        answer:
          "Make sure to bring your laptop, charger and any other required tech you’ll need for your hack. You will find it helpful to bring along key items you would bring to a sleepover: pillows, blanket, toothbrush/toothpaste, deodorant, earphones, etc.",
      },
      {
        question: "What shouldn’t I bring?",
        answer:
          "Please do not bring any drugs or alcohol. If you are not sure about bringing a certain item, please send us a message ahead of time.",
      },
      {
        question: "Will there be food?",
        answer:
          "We will provide snacks at the event. We will also have food storage options available for you to bring your own food and store it right at the event.",
      },
      {
        question: "Will there be prizes?",
        answer:
          "Yes! There will be various prizes given out from the event, including trivia prizes, prizes for winning hacks, and possibly even prizes given out by sponsors. Just keep in mind that the prizes for winning hacks are based on teams of 4. 😉",
      },
      {
        question: "Can I work remotely?",
        answer:
          "Absolutely! The event is fully hybrid, and can be joined through our discord. All you need is a computer you can work from and an internet connection!",
      },
      {
        question: "What’s the best group size?",
        answer:
          "You can have an absolute max group size of 5 hackers (different from previous years!)",
      },
    ],
    Help: [
        {
            question: "Can I volunteer instead?",
            answer:
                "Of course! You can sign up here, or email hacked@compeclub.com if you're interested!",
            },
            {
            question: "How can I sponsor this?",
            answer:
                "If you and your company are interested in getting your APIs in hackers hand’s, face-to-face mentorship with students and general outreach with swag, prizes and/or traditional sponsorship, please reach out to us at hacked@compeclub.com and we can work out how HackED Beta can benefit you!",
            },
          {
            question: "I’ve got another question...",
            answer:
              "Please reach out to us at hacked@compeclub.com! We’re always willing to answer your needs :) We hope to help you be the best hacker you can be.",
          },
      
    ],
  };

  return (
    <div id="faq" className="faq-container bg-gray-900 p-6 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-center text-pink-500 mb-4">Frequently Asked Questions</h2>
      {Object.entries(faqCategories).map(([category, faqs], catIndex) => (
        <div key={catIndex} className="faq-category mb-4">
          <button
            className="category-title w-full text-left text-xl font-semibold py-2 px-4 bg-gray-800 text-white rounded-md shadow-sm hover:bg-gray-700 transition-colors"
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
          {activeCategory === category &&
            faqs.map((faq, index) => (
              <div key={index} className="faq-item mb-3 ml-4">
                <button
                  className="faq-question w-full text-left text-lg font-medium py-2 px-4 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <div className="faq-answer bg-gray-800 p-4 rounded-md mt-2 shadow-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Faq;
