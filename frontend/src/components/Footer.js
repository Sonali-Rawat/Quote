import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* About Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Event Planning Services</h2>
          <p>© 2024 Event Planning Services. All rights reserved.</p>
        </div>
        
        {/* Contact Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-lg font-semibold mb-2">Contact Us</p>
          <p>Phone: +1234567890</p>
          <p>Email: <a href="mailto:email@example.com" className="text-blue-400 hover:underline">email@example.com</a></p>
        </div>
        
        {/* Social Media Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-lg font-semibold mb-2">Follow Us</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        
        {/* Legal Section */}
        <div className="text-sm text-center md:text-left">
          <p><a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a></p>
          <p><a href="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
