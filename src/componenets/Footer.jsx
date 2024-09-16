import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 ml-2">
          &copy; 2024 HACKED BETA. All Rights Reserved.
        </p>
        <nav className="flex space-x-4 mt-2 md:mt-0 mr-2">
          <a href="#" className="hover:text-pink-500">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:text-pink-500">
            TERMS & CONDITIONS
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;