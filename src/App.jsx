import React from 'react';
import { Header, Hero, Info, Schedule, Sponsors, Prizes, Register, Footer, Faq } from './componenets';

function App() {
  return (
    <div className="App bg-gray-900 text-white">
      <Header />
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 h-1"></div>
      <Hero />
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 h-1"></div>
      <Info />
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 h-1"></div>
      <Schedule />
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 h-1"></div>
      <Sponsors />
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 h-1"></div>
      <Faq />
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 h-1"></div>
      <Footer />
    </div>
  );
}



export default App;
