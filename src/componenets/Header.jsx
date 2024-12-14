import React from 'react';

const Header = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <header id="header" className="bg-transparent text-cyan-600 p-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold">HACKED</h1>
      <nav className="space-x-4 mt-2 md:mt-0">
        <a href="#header" className="hover:text-cyan-100" onClick={(e) => handleSmoothScroll(e, '#header')}>Home</a>
        <a href="#info" className="hover:text-cyan-300" onClick={(e) => handleSmoothScroll(e, '#info')}>Location</a>
        <a href="#schedule" className="hover:text-cyan-300" onClick={(e) => handleSmoothScroll(e, '#schedule')}>Schedule</a>
        <a href="#sponsors" className="hover:text-cyan-300" onClick={(e) => handleSmoothScroll(e, '#sponsors')}>Sponsors</a>
        <a href="#faq" className="hover:text-cyan-300" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</a>
      </nav>
      <button className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600 mt-2 md:mt-0">
{/*       <a className="bg-cyan- px-4 py-2 rounded hover:bg-cyan-600 mt-2 md:mt-0" href="https://docs.google.com/forms/d/e/1FAIpQLSewv6xgpW_XlPPJ5bN2yMBpyniYIsH_ouZE1RlgKKe6EN2tIg/viewform" > */}
      REGISTRATION OPEN SOON
{/*       </a>       */}
      </button>
    </header>
  );
};

export default Header;
