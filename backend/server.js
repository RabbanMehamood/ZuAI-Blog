const express = require('express');
const cors = require('cors'); // Import CORS middleware
const postRoutes = require('./routes/postRoutes.js');

const app = express();

// Configure CORS to allow requests from the frontend domain
const allowedOrigins = ['https://zuai-blog-frontend.onrender.com','http://localhost:3001'];

// Use CORS middleware
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Use the post routes
app.use('/api', postRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
