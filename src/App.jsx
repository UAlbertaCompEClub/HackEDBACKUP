import React from 'react';
import { Header, Hero, Info, Schedule, Sponsors, Prizes, Register, Footer, Faq } from './componenets';

function App() {
  return (
    <div className="App bg-gray-900 text-white">
      <Header />
      <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-green-500 h-1"></div>
      <Hero />
      <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-green-500 h-1"></div>
      <Info />
      <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-green-500 h-1"></div>
      <Schedule />
      <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-green-500 h-1"></div>
      <Sponsors />
      <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-green-500 h-1"></div>
      <Faq />
      <div className="bg-gradient-to-br from-teal-400 via-cyan-500 to-green-500 h-1"></div>
      <Footer />
    </div>
  );
}

export default App;
