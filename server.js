// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Default Route
app.get('/', (req, res) => {
  res.send('🚀 SKREATOR Studio Backend is Live!');
});

// Contact Form API (POST)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // You can later store this in MongoDB or send email using nodemailer
  console.log('📨 New Contact Submission:', { name, email, message });

  res.status(200).json({ success: true, msg: 'Message received!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
