import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false); // Close the menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      id="header"
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-4 flex justify-between items-center shadow-lg relative"
    >
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-widest md:block">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500">
          HACKED
        </span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {[
          { label: "Home", id: "#header" },
          { label: "Location", id: "#info" },
          { label: "Schedule", id: "#schedule" },
          { label: "Sponsors", id: "#sponsors" },
          { label: "FAQ", id: "#faq" },
        ].map((item) => (
          <a
            key={item.id}
            href={item.id}
            onClick={(e) => handleSmoothScroll(e, item.id)}
            className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-gray-300 hover:text-white transition duration-300 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Slide-in Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 w-64`}
      >
        <button
          className="text-gray-300 hover:text-white mt-4 ml-4 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="mt-8 flex flex-col space-y-4 px-6">
          {[
            { label: "Home", id: "#header" },
            { label: "Location", id: "#info" },
            { label: "Schedule", id: "#schedule" },
            { label: "Sponsors", id: "#sponsors" },
            { label: "FAQ", id: "#faq" },
          ].map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <a
          href="https://docs.google.com/forms/d/1ls6dmQELwGn8hvG5O2efnphKssnm5PJSZu2d0eOGtNY/edit"
          className="inline-block bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500 px-6 py-2 text-lg font-bold text-gray-900 rounded-full shadow-lg hover:scale-105 transform transition-transform"
        >
          Registration Open Soon
        </a>
      </div>
    </header>
  );
};

export default Header;
