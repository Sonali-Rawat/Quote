import React, { useState } from 'react';
import QuoteModal from './QuoteModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg">Company Logo</div>
      <div className="text-neutral-300 text-sm flex space-x-4">
        {/* Updated each service link to trigger the modal */}
        <a href="#weddings" onClick={handleModalOpen} className="hover:text-white">Weddings</a>
        <a href="#corporate-events" onClick={handleModalOpen} className="hover:text-white">Corporate Events</a>
        <a href="#parties" onClick={handleModalOpen} className="hover:text-white">Parties</a>
        <a href="#conferences" onClick={handleModalOpen} className="hover:text-white">conferences</a>
        <a href="#party&photography" onClick={handleModalOpen} className="hover:text-white">Party&Photography</a>
        <a href="#entertainment" onClick={handleModalOpen} className="hover:text-white">Entertainment</a>
      </div>
      <div className="text-white flex space-x-4">
  <a href="tel:+1234567890" className="bg-green-500 hover:bg-green
  
  -600 px-4 py-2 rounded transition duration-300">Call</a>
  <button onClick={handleModalOpen} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">Instant Quote</button>
</div>

      {isModalOpen && <QuoteModal onClose={handleModalClose} />}
    </nav>
  );
};

export default Navbar;
