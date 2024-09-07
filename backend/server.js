const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Create an instance of Express
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

const quoteSchema = new mongoose.Schema({
  eventType: [String],
  location: String,
  numberOfGuests: Number,
  cateringNeeds: String,
  additionalServices: [String],
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  alternateNumber: String,
  country: String,
  city: String,
  state: String,
  zipcode: String,
});

const Quote = mongoose.model('Quote', quoteSchema);

// Endpoint to handle quote submission
app.post('/api/quotes', async (req, res) => {
  try {
    const quoteData = req.body;

    // Create a new quote document
    const newQuote = new Quote(quoteData);

    // Save the quote to the database
    await newQuote.save();

    // Send success response
    res.status(200).json({ message: 'Quote submitted successfully!' });
  } catch (error) {
    console.error('Error submitting quote:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
