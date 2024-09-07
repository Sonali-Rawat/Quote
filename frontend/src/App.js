// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ThankYouPage from './components/ThankYouPage'; // Import ThankYouPage component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<QuoteModal />} /> {/* Route for QuoteModal */}
            <Route path="/thank-you" element={<ThankYouPage />} /> {/* Route for ThankYouPage */}
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
