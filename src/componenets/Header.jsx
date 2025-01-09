import React from "react";

const Header = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      id="header"
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-lg"
    >
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-widest">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500">
          HACKED
        </span>
      </h1>

      {/* Navigation Links */}
      <nav className="mt-4 md:mt-0 flex space-x-6">
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

      {/* CTA Button */}
      <div className="mt-4 md:mt-0">
        <a 
          href="https://docs.google.com/forms/d/1ls6dmQELwGn8hvG5O2efnphKssnm5PJSZu2d0eOGtNY/edit" // Closed the href attribute properly
          className="inline-block bg-gradient-to-r from-teal-400 via-cyan-500 to-green-500 px-6 py-2 text-lg font-bold text-gray-900 rounded-full shadow-lg hover:scale-105 transform transition-transform"
        >
          Registration Open Soon
        </a>
      </div>

    </header>
  );
};

export default Header;
