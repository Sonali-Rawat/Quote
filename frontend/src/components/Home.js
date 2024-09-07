import React, { useState } from 'react';
import InstantQuoteWindow from './QuoteModal'; // Adjust import path if needed

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/811572/pexels-photo-811572.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 text-white text-center">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">Welcome to Our Event Planning Services</h1>
        <p className="text-lg mb-8 md:text-xl">We offer a range of services to make your event unforgettable. From weddings to corporate events, we have you covered.</p>
        
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <button 
            onClick={handleCall} 
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          >
            Call
          </button>
          <button 
            onClick={handleOpenQuoteModal} 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
          >
            Instant Quote
          </button>
        </div>
      </div>
      
      {/* Instant Quote Modal */}
      {isQuoteModalOpen && <InstantQuoteWindow onClose={handleCloseQuoteModal} />}
    </div>
  );
};

export default Home;
