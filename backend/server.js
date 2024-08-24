const express = require('express');
const postRoutes = require('./routes/postRoutes.js');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the post routes
app.use('/api', postRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
