const express = require('express');
const app = express();

// Define a GET route at the root path '/'
app.get('/', (req, res) => {
    // Send a response to the client
    res.send('Server is ON');
  });
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});