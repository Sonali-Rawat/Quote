// src/components/ThankYouPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ThankYouPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleClose = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-1/2 max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
          <div className="bg-green-100 text-green-600 p-4 rounded-full shadow-md mb-4">
            <div className="text-4xl">✅</div>
          </div>
          <p className="text-xl font-semibold text-gray-700">Thank you! We will call you soon.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
