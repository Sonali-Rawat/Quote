import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ThankYouPage from './ThankYouPage';

const apiUrl = process.env.REACT_APP_API_URL;

const QuoteModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: [],
    location: '',
    numberOfGuests: '',
    cateringNeeds: '',
    additionalServices: [],
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    alternateNumber: '',
    country: '',
    city: '',
    state: '',
    zipcode: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const eventTypes = ['Wedding', 'Conference', 'Party', 'Corporate Event']; // Example options
  const additionalServicesOptions = ['Photography', 'Music', 'Decoration', 'Lighting']; // Example options

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      [category]: checked
        ? [...formData[category], value]
        : formData[category].filter((item) => item !== value),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/api/quotes`, formData); // Change the URL to match backend port
      setIsSubmitted(true);
      navigate('/thank-you'); // Navigate to ThankYouPage
    } catch (error) {
      console.error('Error submitting quote:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-1/2 relative z-50">
        {/* Cross icon for closing modal */}
        <button
  onClick={onClose}
  className="absolute top-4 right-4 text-gray-600 hover:text-white bg-gray-200 hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

        
<h2 className="text-2xl mb-4">Instant Quote</h2>
        {isSubmitted ? (
          <ThankYouPage />
        ) : (
          <>
            {step === 1 && (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <label className="block text-lg font-semibold text-gray-800 mb-4">Event Type</label>
    <div className="space-y-2">
      {eventTypes.map((type) => (
        <div key={type} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            value={type}
            onChange={(e) => handleCheckboxChange(e, 'eventType')}
            className="h-5 w-5 text-blue-500 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700 text-md">{type}</span>
        </div>
      ))}
    </div>
    <button
      onClick={handleNext}
      className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
    >
      Next
    </button>
  </div>
)}

{step === 2 && (
  <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="John"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Doe"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="+1234567890"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="example@example.com"
        />
      </div>

      {/* Alternate Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Alternate Number</label>
        <input
          type="text"
          name="alternateNumber"
          value={formData.alternateNumber}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="+0987654321"
        />
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Country"
        />
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="City"
        />
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="State"
        />
      </div>

      {/* Zipcode */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Zipcode</label>
        <input
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Zipcode"
        />
      </div>
    </div>
    <div className="flex justify-between mt-6">
      <button onClick={handlePrev} className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition-colors">
        Prev
      </button>
      <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
        Next
      </button>
    </div>
  </div>
)}

{step === 3 && (
  <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
    <div className="grid grid-cols-1 gap-6">
      {/* Number of Guests */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
        <input
          type="number"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of guests"
        />
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Country"
        />
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="State"
        />
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="City"
        />
      </div>

      {/* Zipcode */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Zipcode</label>
        <input
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Zipcode"
        />
      </div>
    </div>

    <div className="flex justify-between mt-6">
      <button onClick={handlePrev} className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition-colors">
        Prev
      </button>
      <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
        Next
      </button>
    </div>
  </div>
)}

{step === 4 && (
  <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
    <div>
      <label className="block text-lg font-semibold text-gray-800">Additional Services</label>
      <div className="mt-2 space-y-2">
        {additionalServicesOptions.map((service) => (
          <div key={service} className="flex items-center">
            <input
              type="checkbox"
              value={service}
              onChange={(e) => handleCheckboxChange(e, 'additionalServices')}
              className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="ml-2 text-gray-700">{service}</span>
          </div>
        ))}
      </div>
    </div>
    <button
      onClick={handleSubmit}
      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      Submit
    </button>
  </div>
)}

          </>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
